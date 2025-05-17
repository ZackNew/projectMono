export const getClientEmailHtml = ({
  fullName,
  courseRegistered
}: {
  fullName: string
  courseRegistered: string
}) => `
  <div style="font-family: Arial, sans-serif; padding: 20px;">
    <h2 style="color: #2c3e50;">Welcome to the ${courseRegistered} Course!</h2>

    <p>Hi ${fullName},</p>

    <p>Thank you for registering for our <strong>${courseRegistered}</strong> course. We're thrilled to have you on board!</p>

    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxiCZKP-Wbm2CdTP458FR0P4nIDnXRBoH7CQ&s" alt="Welcome" style="width: 100%; max-width: 500px; border-radius: 10px; margin: 20px 0;" />

    <p>You’ll be contacted soon by one of our team members via the phone number or email you provided.</p>

    <p>If you have any questions, feel free to reply to this email or contact our support team.</p>

    <br />
    <p>Warm regards,</p>
    <p>The Creative School Team</p>
    <hr />
    <small style="color: #888;">This is an automated message from noreply@yourdomain.com</small>
  </div>
`
