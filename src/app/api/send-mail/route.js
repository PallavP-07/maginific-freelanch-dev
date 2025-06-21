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
    console.log('Resume URL:', resumeUrl);

    const fileRes = await fetch(resumeUrl);
    console.log('File status:', fileRes.status);

    if (!fileRes.ok) {
      throw new Error(`Failed to fetch resume: ${fileRes.status}`);
    }

    const fileBuffer = await fileRes.arrayBuffer();
    const fileSizeMB = fileBuffer.byteLength / (1024 * 1024);
    const base64Content = Buffer.from(fileBuffer).toString('base64');
    const contentType = fileRes.headers.get('content-type') || 'application/pdf';

    console.log('File size (MB):', fileSizeMB.toFixed(2));
    console.log('Base64 content size:', base64Content.length);
    console.log('Content-Type:', contentType);

    const shouldAttach = fileSizeMB <= 5;

    // 🌟 Styled email HTML
    const emailHtml = `
      <div style="font-family:Arial, sans-serif; max-width:600px; margin:auto; padding:20px; background-color:#f9f9f9; border-radius:8px; color:#333;">
        <h2 style="color:#4A90E2;">📩 New Job Application Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Title:</strong> ${title}</p>
        <p><strong>Message:</strong><br/>${message}</p>
        <p><strong>Resume:</strong> ${
          shouldAttach
            ? 'Attached'
            : `<a href="${resumeUrl}" style="color:#4A90E2;">Download Resume</a>`
        }</p>
        <hr style="margin-top:20px; border:none; border-top:1px solid #ddd;" />
        <p style="font-size:12px; color:#888;">This email was sent via Resend API.</p>
      </div>
    `;

    const emailOptions = {
      from: 'aaran@magnificsearch.com', // must be verified domain
      to: ['demoacc6272@gmail.com'], // or others if domain verified
      subject: `New Job Application - ${name}`,
      html: emailHtml,
    };

    // Only attach file if <= 5 MB
    if (shouldAttach) {
      emailOptions.attachments = [
        {
          filename: resumeFileName || 'resume.pdf',
          content: base64Content,
          type: contentType,
        },
      ];
    }

    const data = await resend.emails.send(emailOptions);

    if (data.error) {
      console.error('Resend API error:', data.error);
      throw new Error(data.error.message);
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error sending email:', error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
