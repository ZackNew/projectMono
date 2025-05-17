import nodemailer from "nodemailer";
import { getClientContactEmailHtml } from "../utils/emails/contact-client-email";
import { getAdminContactEmailHtml } from "../utils/emails/contact-admin-email";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, name, message } = body

   if (!email || !name || !message) {
    return createError({ statusCode: 400, message: 'Name and email are required' })
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SUPPORT_SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  
  const clientEmail = getClientContactEmailHtml({
    name
  })
  // send email to the client
  transporter.sendMail({
    from: `"Project Mono" <${process.env.SUPPORT_SMTP_USER}>`,
    to: email,
    subject: "We've received your message – Thank you for contacting us!",
    html: clientEmail,
  });
  
  const adminEmail = getAdminContactEmailHtml({
    name, email, message
  })
  // send email to admin
  transporter.sendMail({
    from: `"Project Mono" <${process.env.SUPPORT_SMTP_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `New Contact Us message from ${name}`,
    html: adminEmail,
  });

  return { success: true, message: "Emails sent successfully" };
});
