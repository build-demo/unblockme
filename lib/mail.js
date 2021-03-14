const MailGen = require('mailgen')
const {productLink,logo,link,emailService, emailPass, emailUser } = require('./config')

const nodemailer = require('nodemailer');
const mailGenerator = new MailGen({
    theme: 'salted',
    product: {
      name: 'UNBLOCK ME',
      link: productLink,
      logo: logo,
      logoHeight: '100px'
    },
  })


const sendEmail = async(name, receipientEmail, id, ProgrammingLanguage)=>{
  const email = {
    body: {
        greeting: 'Welcome',
      name: `${name} &#128512;`,
      intro: ['We\'re very excited to have you.', 'You are a button away from receiving technical assistance from a mentor'],
      action: {
        instructions: 'Please click the button below to schedule a meeting with a mentor',
        button: {
          color: '#33b5e5',
          text: 'Schedule Session',
          link: `${link}/mentors?id=${id}&language=${ProgrammingLanguage}`,
        },
      },
      outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
    },
  }
  
const emailTemplate = mailGenerator.generate(email)
require('fs').writeFileSync('preview.html', emailTemplate, 'utf8')

    const transporter = nodemailer.createTransport({
        service: emailService,
        auth: {
          user: emailUser,
          pass: emailPass
        }
      });

    const data = {
        from: emailUser,
        to: receipientEmail ,
        subject: 'Hello from unblock me',
        html: emailTemplate
    }

    transporter.sendMail(data, function(error, info){
        if (error) {
          console.log(error);
          return false
        } else {
          console.log('Email sent: ' + info.response);
          return true
        }
      });
}

module.exports ={
    sendEmail
}