import nodemailer from "nodemailer";
import { getClientEmailHtml } from "../utils/emails/register-client-email";
import { getAdminEmailHtml } from "../utils/emails/register-admin-email";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { fullName, phone, email, designSkill, futureUse, hearFrom, paymentMethod, courseRegistered } = body
  const name = "zeberga";

   if (!fullName || !phone || !email || !designSkill || !futureUse || !hearFrom || !paymentMethod || !courseRegistered) {
    return createError({ statusCode: 400, message: 'Name and email are required' })
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.NOREP_SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  console.log('sending email 1');
  
  const clientEmail = getClientEmailHtml({
    fullName, courseRegistered
  })
  // send email to the client
  await transporter.sendMail({
    from: `"Your Site" <${process.env.NOREP_SMTP_USER}>`,
    to: email,
    subject: "Welcome to Our Platform",
    html: clientEmail,
  });

  console.log('sending email 2');
  
  const adminEmail = getAdminEmailHtml({
    fullName,
    email,
    phone,
    designSkill,
    futureUse,
    hearFrom,
    paymentMethod,
    courseRegistered
  })
  // send email to nahu
  await transporter.sendMail({
    from: `"Your Site" <${process.env.NOREP_SMTP_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: "New User Registration",
    html: adminEmail,
  });

  return { success: true, message: "Emails sent successfully" };
});
