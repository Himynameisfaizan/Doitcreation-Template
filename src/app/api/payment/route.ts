import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";
import mysql from "mysql2/promise";

export async function POST(req: NextRequest) {
  try {
    const { price, product } = await req.json();

    // Razorpay instance
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });

    // Create order
    const order = await razorpay.orders.create({
      amount: price * 100,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    });

    // (optional) save order in DB (status = created)
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    await connection.execute(
      `INSERT INTO payments (amount, product, order_id, status) VALUES (?, ?, ?, ?)`,
      [price, product, order.id, "created"]
    );

    await connection.end();

    // Send order to frontend
    return NextResponse.json({
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
    });

  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
