import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import mysql from "mysql2/promise";
import nodemailer from "nodemailer";

const productLinks: any = {
  Mega_bundle: "https://mega_bundle",
  Visiting_cards: "https://visiting_cards",
  Letter_head: "https://letter_head",
  Brochure_design: "https://brochure_design",
  Social_post: "https://social_post",
  Logo_animation: "https://logo_animation",
};

export async function POST(req: NextRequest) {
  try {
    const {
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
      user_id,
      email,
    } = await req.json();

    // Step 1: Generate expected signature
    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(body)
      .digest("hex");

    const buff1 = Buffer.from(expectedSignature);
    const buff2 = Buffer.from(razorpay_signature);
    // Step 2: Compare signatures
    const isLengthValid = buff1.length === buff2.length;

    if (!isLengthValid) {
      return NextResponse.json({ success: false });
    }

    const isValid = crypto.timingSafeEqual(buff1, buff2);
    if (!isValid) {
      return NextResponse.json({ success: false });
    }

    // Step 3: Update DB
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    await connection.execute(
      `UPDATE payments 
       SET email = ?, payment_id = ?, status = ? , user_id = ?, razorpay_signature = ?
       WHERE order_id = ?`,
      [
        email,
        razorpay_payment_id,
        "paid",
        user_id,
        razorpay_signature,
        razorpay_order_id,
      ],
    );

    const [rows]: any = await connection.execute(
      `SELECT p.product , p.status
      FROM payments p
      JOIN user u ON p.user_id = u.id
      WHERE p.order_id = ?`,
      [razorpay_order_id],
    );

    await connection.end();
    const status = rows[0].status;
    const product = rows[0].product;
    const downloadLink = productLinks[product];

    if (status !== "paid") throw Error("Payment is not completed");

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
      to: email,
      subject: "Your Purchase is Ready 🎉",
      html: `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 20px;">
    <h2 style="color: #000;">🎉 Payment Successful!</h2>
    <p>Hi,</p>
    <p>
      Thank you for your purchase from <b>Do It Creation</b>. Your order has been successfully processed.
    </p>
    <p>
      You can download your product using the link below:
    </p>
    <p style="word-break: break-all;">
      🔗 <a href="${downloadLink}" target="_blank" style="color: #000; text-decoration: underline;">
       
      </a>
    </p>
    <p>
      <b>Important:</b> Please save this link for future use. If you face any issues, feel free to contact us.
    </p>
    <hr style="margin: 20px 0;" />
    <p style="font-size: 14px; color: #555;">
      Thanks & Regards,<br/>
      <b>Do It Creation Team</b><br/>
      📧 contact@doitcreation.com<br/>
      📞 +91 9560237516
    </p>
  </div>
`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
