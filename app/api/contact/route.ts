import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message, recaptchaToken } = body;

    // Server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    // Verify reCAPTCHA
  const verifyRes = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`, {
    method: 'POST',
  });
  const verifyData = await verifyRes.json();

  if (!verifyData.success || verifyData.score < 0.5) {
    return new Response(JSON.stringify({ message: 'Bot detected' }), { status: 400 });
  }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'ArdentInfo <sales@ardentinfo.com>', // Replace with your verified domain later
      to: ['sales@ardentinfo.com'], // Where you want to receive submissions
      subject: `New Contact Form: ${name}`,
      html: `
        <h2>New Inquiry from ArdentInfo.com</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ message: 'Email sent successfully', id: data?.id }, { status: 200 });
  } catch (err) {
    console.error('Resend Error:', err);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}