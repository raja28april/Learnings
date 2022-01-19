const merge = require('deepmerge')
const wdioConf = require('./wdio.conf');


exports.config = merge(wdioConf.config,{
    baseUrl:"https://rahulshettyacademyUAT.com",
    waitForTimeOut:5000,
})