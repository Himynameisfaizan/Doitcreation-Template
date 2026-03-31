import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import mysql from "mysql2/promise";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message } = await req.json();

    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    const [result]: any = await connection.execute(
      `INSERT INTO user (name, email, phone, message) VALUES (?, ?, ?, ?)`,
      [name, email, phone, message]
    );

    const userId = result.insertId;

    // Send email
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `Do It Creation <${process.env.EMAIL_USER}>`,
      to: "contact@doitcreation.com",
      subject: `${name} submitted form`,
      html: `
        <h2>New Contact Message</h2>
        <p><b>User ID:</b> ${userId}</p>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Mobile:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    await connection.end();
    return NextResponse.json({ success: true, userId });

  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}