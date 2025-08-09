import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const {
      type, // "contact" or "job"
      name,
      email,
      phone,
      company,
      title,
      message,
      resumeFileId,
      resumeFileName,
    } = await request.json();

    // Optional resume fetching (only for job applications with a file)
    let shouldAttach = false;
    let attachment = null;
    let resumeUrl = null;

    if (type === "job" && resumeFileId) {
      resumeUrl = `${process.env.NEXT_PUBLIC_DIRECTUS_API_URL}/assets/${resumeFileId}`;

      const fileRes = await fetch(resumeUrl);
      if (!fileRes.ok)
        throw new Error(`Failed to fetch resume: ${fileRes.status}`);

      const fileBuffer = await fileRes.arrayBuffer();
      const fileSizeMB = fileBuffer.byteLength / (1024 * 1024);
      const base64Content = Buffer.from(fileBuffer).toString("base64");
      const contentType =
        fileRes.headers.get("content-type") || "application/pdf";

      shouldAttach = fileSizeMB <= 5;
      if (shouldAttach) {
        attachment = {
          filename: resumeFileName || "resume.pdf",
          content: base64Content,
          type: contentType,
        };
      }
    }

    // Dynamic subject
    const subjectMap = {
      contact: `New Contact Form Submission from ${name}`,
      job: `💼 New Job Application - ${name}${title ? ` (${title})` : ""}`,
    };
    const emailSubject = subjectMap[type] || `New Message from ${name}`;

    // Dynamic HTML template
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 650px; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 10px; color: #333; line-height: 1.6;">
        <h2 style="color: ${type === "job" ? "#2E86DE" : "#27ae60"};">
          ${type === "job" ? "💼 New Job Application Received" : "📬 New Contact Message"}
        </h2>
        
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}" style="color:#2E86DE;">${email}</a></p>
        ${phone ? `<p><strong>Phone:</strong> <a href="tel:${phone}" style="color:#2E86DE;">${phone}</a></p>` : ""}
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
        ${title && type === "job" ? `<p><strong>Position Applied:</strong> ${title}</p>` : ""}

        ${message ? `<p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>` : ""}

        ${
          type === "job"
            ? `
          <p><strong>Resume:</strong> ${
            shouldAttach
              ? "Attached to this email"
              : `<a href="${resumeUrl}" style="color:#2E86DE;">Download Resume</a>`
          }</p>
        `
            : ""
        }

        <hr style="margin-top: 20px; border: none; border-top: 1px solid #ddd;" />
        <p style="font-size: 12px; color: #888; text-align: center;">This email was sent via the Magnific Search website.</p>
      </div>
    `;

    // Send email
    const emailOptions = {
      from: `"Magnific Search" <aaran@magnificsearch.com>`,
      to: ["demoacc6272@gmail.com"], 
      subject: emailSubject,
      html: emailHtml,
    };

    if (attachment) {
      emailOptions.attachments = [attachment];
    }

    const data = await resend.emails.send(emailOptions);

    if (data.error) {
      console.error("Resend API error:", data.error);
      throw new Error(data.error.message);
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending email:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
