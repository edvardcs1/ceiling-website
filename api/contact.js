// Vercel Serverless Function - Contact Form Handler
// This uses Gmail SMTP via Cloudflare email routing

const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, project, message } = req.body;

  // Validate required fields
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // Create Gmail transporter
    // Uses environment variables for security
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Gmail App Password
      },
    });

    // Email content
    const mailOptions = {
      from: `"CM Acoustic Website" <${process.env.GMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL || 'info@cmacousticceiling.com',
      replyTo: email,
      subject: `New Estimate Request from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Project Type:</strong> ${project || 'Not specified'}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone}
Project Type: ${project || 'Not specified'}

Message:
${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email sending failed:', error);
    res.status(500).json({ 
      message: 'Failed to send email', 
      error: error.message 
    });
  }
}