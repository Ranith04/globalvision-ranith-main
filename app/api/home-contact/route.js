import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, mobile, service, firstName, lastName, message } = await req.json();

    // Determine which fields to use for the email
    const displayName = name || `${firstName || ''} ${lastName || ''}`.trim();
    const displayService = service || message || '';

    if (!displayName || !email || !mobile || !displayService) {
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
      to: process.env.EMAIL_USER, // send to yourself or change as needed
      subject: 'New Contact Form Submission',
      text: `Name: ${displayName}\nEmail: ${email}\nMobile: ${mobile}\nService/Message: ${displayService}`,
      html: `<p><b>Name:</b> ${displayName}</p><p><b>Email:</b> ${email}</p><p><b>Mobile:</b> ${mobile}</p><p><b>Service/Message:</b> ${displayService}</p>`
    };

    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Email send error:', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
