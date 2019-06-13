const axios = require('axios')

module.exports = async ({ base }) => {
  const currencyReqConfig = {
    url: '/latest',
    method: 'get',
    baseURL: 'https://api.exchangeratesapi.io',
    params: {
      base,
    }
  }

  try {
    const { data: currency } = await axios(currencyReqConfig)

    return currency
  } catch (err) {

    return err
  }
}