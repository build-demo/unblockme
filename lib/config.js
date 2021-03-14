const dotenv = require('dotenv')
dotenv.config()

const config = {
  prefix: "!",
  token: process.env.DISCORD_TOKEN,
  productLink: 'http://example.com',
  logo: 'https://i.ibb.co/Rv1Tg53/unblockme.png',
  link: 'http://localhost:3001',
  emailService: process.env.EMAIL_SERVICE,
  emailUser: process.env.EMAIL_USER,
  emailPass: process.env.EMAIL_PASS,
  // gClientId: GOOGLE_CALENDAR_CLIENT_ID,
  // gClientPassword: GOOGLE_CALENDAR_CLIENT_SECRET,
  baseUrl: process.env.BASE_URL
}

module.exports=config
