//install core dependicies for dashboard this page or view is where users configure, name, email, company, address
const express = require('express')
const router = express.Router()



router.get('/', (req, res) => { 
    res.send('I am a configuration controller for users who have the right permission can go and edit the wallet addresses, or other company level items, year end, address, EIN number, maybe view / edit access to users underneath the company hierarchy')
  })


module.exports = router