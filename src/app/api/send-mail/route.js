// File: src/app/api/send-mail/route.js

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const {
      name,
      email,
      phone,
      company,
      title,
      message,
      resumeFileId,
      resumeFileName
    } = await request.json();

    const resumeUrl = `${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}/assets/${resumeFileId}`;

    const fileRes = await fetch(resumeUrl);
    const fileBuffer = await fileRes.arrayBuffer();

    const data = await resend.emails.send({
      from: 'pallav@webiknows.com', // must be a verified sender
      to: ['pallav811@gmail.com'],
      subject: `New Job Application - ${name}`,
      html: `
        <h2>New Application Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Title:</strong> ${title}</p>
        <p><strong>Message:</strong><br/> ${message}</p>
      `,
      attachments: [
        {
          filename: resumeFileName || 'resume.pdf',
          content: Buffer.from(fileBuffer).toString('base64'),
          type: 'application/pdf',
        },
      ],
    });

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
    });
  }
}
