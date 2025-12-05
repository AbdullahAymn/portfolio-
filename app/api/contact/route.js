import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      replyTo: email,
      to: process.env.MY_EMAIL,
      subject: `New Message From ${name}`,
      html: `
      <!DOCTYPE html>
      <html>
        <body style="font-family: Arial; background:#f5f5f5; padding:20px;">
          <div style="max-width:600px; margin:auto; background:white; padding:20px; border-radius:10px;">
            <h2 style="text-align:center; color:#0070f3;">📩 New Contact Message</h2>
            <h3>Sender Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <hr/>
            <h3>Message</h3>
            <p style="white-space:pre-line;">${message}</p>
            <hr/>
            <p style="text-align:center; font-size:12px; color:#777;">
              Message sent from your portfolio contact form.
            </p>
          </div>
        </body>
      </html>
    `,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ success: true });
  } catch (err) {
    return Response.json(
      { success: false, error: err.message, stack: err.stack },
      { status: 500 }
    );
  }
}
