//install core dependicies for dashboard this page or view is where the widgets and graphs will be
const express = require('express')
const router = express.Router()


// The home route will navigate to the home.ejs
router.get('/', (req, res) => { 
    res.send('I am a dashboard I am display page where there are widgets that make me look pretty, but have questionable use')
  })


module.exports = router