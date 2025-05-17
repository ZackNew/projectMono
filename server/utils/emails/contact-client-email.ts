export const getClientContactEmailHtml = ({
  name,
}: {
  name: string
}) => `
  <div style="font-family: Arial, sans-serif; padding: 20px;">
    <h2 style="color: #2c3e50;">We Received Your Message</h2>

    <p>Hi ${name},</p>

    <p>Thank you for reaching out to us. Your message has been received and our team will get back to you as soon as possible.</p>

    <p>We appreciate your interest and will do our best to assist you promptly.</p>

    <br />
    <p>Best regards,</p>
    <p>The Support Team</p>

    <hr />
    <small style="color: #888;">This is an automated message from support@yourdomain.com</small>
  </div>
`
