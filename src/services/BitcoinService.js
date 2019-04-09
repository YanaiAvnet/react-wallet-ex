import axios from 'axios'
const marketPrice = require('../marketPrice.json')
const confirmedTransactions = require('../confirmedTransactions.json')

export default {
    getRate,
    getMarketPrice,
    getConfirmedTransactions
}

async function getRate(coins) {
    const rate = +localStorage.getItem('rate')
    if (rate) return rate
    const { data } = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
    localStorage.setItem('rate', data)
    return data
}

async function getMarketPrice() {
    return Promise.resolve(marketPrice)
}

async function getConfirmedTransactions() {
    return Promise.resolve(confirmedTransactions)
}

//&cors=true parameter to
// the GET request