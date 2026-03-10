import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const config = { runtime: "nodejs18.x" };

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const { name, email, message, subject } = req.body

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' })
    }

    try {
      await resend.emails.send({
        from: 'onboarding@resend.dev', // Use your verified domain if available
        to: 'mulercs514@gmail.com', // Your email
        subject: subject || `Portfolio Contact: ${name}`,
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Subject:</strong> ${subject || 'No subject'}</p>
               <p><strong>Message:</strong> ${message}</p>`
      })

      return res.status(200).json({ message: 'Email sent successfully' })
    } catch (error) {
      console.error('Error sending email:', error)
      return res.status(500).json({ error: 'Failed to send email' })
    }
  }

  res.setHeader('Allow', ['POST'])
  res.status(405).end(`Method ${req.method} Not Allowed`)
}