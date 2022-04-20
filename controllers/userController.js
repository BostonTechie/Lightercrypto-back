//install core dependicies for dashboard this page or view is where users configure, name, email, company, address
const express = require('express')
const router = express.Router()



router.get('/', (req, res) => { 
    res.send('I am a configuration controller for users to hash passwords on register, or to go and edit their profile')
  })


module.exports = router