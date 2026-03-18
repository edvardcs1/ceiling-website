// Vercel Serverless Function - Contact Form Handler using Resend
// Resend is the email service built by the Vercel team

import { Resend } from 'resend';

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
    // Initialize Resend with API key from environment variables
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email using Resend
    // IMPORTANT: With unverified domain, you can only send TO your own Resend account email
    // After verifying cmacousticceiling.com in Resend, you can send to any email
    const data = await resend.emails.send({
      from: 'CM Acoustic Website <info@cmacousticceiling.com>',
      to: process.env.RECIPIENT_EMAIL,
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
    });

    res.status(200).json({ message: 'Email sent successfully', data });
  } catch (error) {
    console.error('Email sending failed:', error);
    res.status(500).json({ 
      message: 'Failed to send email', 
      error: error.message 
    });
  }
}
