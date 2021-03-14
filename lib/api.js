const axios = require('axios')
const { baseUrl } = require('./config')

exports.saveMeetingDetails = async data => {
    try {
        console.log('details saved in the DB');
      const result = await axios({
        method: 'post',
        url: `${baseUrl}/meetings`,
        data
      })
      return result
    } catch (error) {
        console.log(error);
      return error
    }
  }