const sgMail = require('@sendgrid/mail')


// 'to' email address should be the inbox that will receive all enquiries

export default async function(req, res) {
  sgMail.setApiKey(process.env.NEXT_PUBLIC_SG_API_KEY) 

  const { name, email, message } = req.body

  const formContent = {
    to: 'dev@npkmedia.co.uk',
    from: 'no-reply@npk.media',
    subject: `New Site Enquiry From - ${name}`,
    text: message,
    html: `
    <div style="color:#444444; padding:16px 16px 16px 16px;">
      <h3>New email from:</h3>
        <p><strong>Name: </strong>${name}</p>
        <p><strong>Email: </strong>${email}</p>
      <hr/>
        <p><strong>Message: </strong><br/>${message}</p>
    </div>
    `
  }

  try {
    await sgMail.send(formContent)
      res.status(200).send('Sent.')
  } catch (error) {
      res.status(400).send('Failed to send. Please try again or give us a ring')
  }
}
