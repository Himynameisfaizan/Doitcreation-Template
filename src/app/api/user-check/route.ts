import { NextRequest, NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone } = await req.json();

    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    // Check if user already exists
    const [rows]: any = await connection.execute(
      "SELECT id FROM user WHERE email = ?",
      [email]
    );

    let userId;
    if (rows.length > 0) {
      // User exists
      userId = rows[0].id;
    } else {
      // Create new user
      const [result]: any = await connection.execute(
        "INSERT INTO user (name, email, phone) VALUES (?, ?, ?)",
        [name, email, phone || null]
      );

      userId = result.insertId;
    }

    await connection.end();

    return NextResponse.json({
      success: true,
      userId, //  important for future use
      email,
    });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}