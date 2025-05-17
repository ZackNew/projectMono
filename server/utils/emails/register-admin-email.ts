export const getAdminEmailHtml = ({
  fullName,
  email,
  phone,
  designSkill,
  futureUse,
  hearFrom,
  paymentMethod,
  courseRegistered
}: {
  fullName: string
  email: string
  phone: string
  designSkill: string
  futureUse: string
  hearFrom: string
  paymentMethod: string
  courseRegistered: string
}) => `
  <div style="font-family: Arial, sans-serif; padding: 20px;">
    <h2 style="color: #d35400;">📥 New Course Registration</h2>

    <p>A new student has registered for the <strong>${courseRegistered}</strong> course.</p>

    <h3 style="margin-top: 20px;">👤 Registration Details:</h3>
    <ul style="line-height: 1.8;">
      <li><strong>Full Name:</strong> ${fullName}</li>
      <li><strong>Email:</strong> ${email}</li>
      <li><strong>Phone:</strong> ${phone}</li>
      <li><strong>Design Skill Level:</strong> ${designSkill}</li>
      <li><strong>Intended Future Use:</strong> ${futureUse}</li>
      <li><strong>Heard From:</strong> ${hearFrom}</li>
      <li><strong>Payment Method:</strong> ${paymentMethod}</li>
    </ul>

    <p>Please follow up with this student if necessary.</p>

    <br />
    <p>📅 Registered on: ${new Date().toLocaleString()}</p>
    <hr />
    <small style="color: #888;">This notification was sent from your registration system</small>
  </div>
`
