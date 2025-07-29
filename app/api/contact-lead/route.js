import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { firstName, lastName, email, phone, subject, message } = await req.json();

    if (!firstName || !lastName || !email || !phone || !subject || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields.' }), { status: 400 });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: 'ranithkumar.unico@gmail.com',
      to: process.env.EMAIL_USER,
      subject: `New Contact Lead: ${subject}`,
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`,
      html: `<p><b>Name:</b> ${firstName} ${lastName}</p><p><b>Email:</b> ${email}</p><p><b>Phone:</b> ${phone}</p><p><b>Subject:</b> ${subject}</p><p><b>Message:</b> ${message}</p>`
    };

    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Email send error:', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
} 