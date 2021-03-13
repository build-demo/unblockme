const dotenv = require('dotenv')
dotenv.config()

const config = {
  prefix: "!",
  token: process.env.DISCORD_TOKEN,
  productLink: 'http://example.com',
  logo: 'https://i.ibb.co/Rv1Tg53/unblockme.png',
  link: 'http://example.com/verify_account',
  emailService: process.env.EMAIL_SERVICE,
  emailUser: process.env.EMAIL_USER,
  emailPass: process.env.EMAIL_PASS,
  // gClientId: GOOGLE_CALENDAR_CLIENT_ID,
  // gClientPassword: GOOGLE_CALENDAR_CLIENT_SECRET,
}

module.exports=config
