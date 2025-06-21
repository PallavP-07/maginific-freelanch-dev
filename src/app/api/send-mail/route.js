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

    // Fetch file from Directus
    const fileRes = await fetch(resumeUrl);
    console.log('File status:', fileRes.status);

    if (!fileRes.ok) {
      throw new Error(`Failed to fetch resume: ${fileRes.status}`);
    }

    const fileBuffer = await fileRes.arrayBuffer();
    console.log('File buffer length:', fileBuffer.byteLength);

    const base64Content = Buffer.from(fileBuffer).toString('base64');
    console.log('Base64 content size:', base64Content.length);

    const contentType = fileRes.headers.get('content-type') || 'application/pdf';
    console.log('Detected content type:', contentType);

    const data = await resend.emails.send({
      from: 'contact.magnificsearch.com', // must be verified
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
         <p><strong>Resume Link:</strong> <a href="${resumeUrl}">Download Resume</a></p>
      `,
      // attachments: [
      //   {
      //     filename: resumeFileName || 'resume.pdf',
      //     content: base64Content,
      //     type: contentType,
      //   },
      // ],
    });

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
