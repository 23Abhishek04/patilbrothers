
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request) {
  try {
    const { name, company, email, phone, subject, message } =
      await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please provide your name, email, and message." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "RESEND_API_KEY is missing from .env.local." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`,
      to: ["patilbrothers30@gmail.com"],
      replyTo: email,
      subject: subject || `Website enquiry from ${name}`,
      text: `
Name: ${name}
Company: ${company || "Not provided"}
Email: ${email}
Phone: ${phone || "Not provided"}
Subject: ${subject || "General enquiry"}

Message:
${message}
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "Unable to process your enquiry." },
      { status: 500 }
    );
  }
}
