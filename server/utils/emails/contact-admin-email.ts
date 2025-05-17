export const getAdminContactEmailHtml = ({
  name,
  email,
  message,
}: {
  name: string
  email: string
  message: string
}) => `
  <div style="font-family: Arial, sans-serif; padding: 20px;">
    <h2 style="color: #d35400;">📥 New Contact Us Message</h2>

    <p>You’ve received a new message via the contact form.</p>

    <h3 style="margin-top: 20px;">📌 Details:</h3>
    <ul style="line-height: 1.8;">
      <li><strong>Name:</strong> ${name}</li>
      <li><strong>Email:</strong> ${email}</li>
      <li><strong>Message:</strong> ${message}</li>
    </ul>

    <br />
    <p>📅 Received on: ${new Date().toLocaleString()}</p>
    <hr />
    <small style="color: #888;">This notification was sent from your website's Contact Us form.</small>
  </div>
`
