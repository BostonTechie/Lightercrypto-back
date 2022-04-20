//npm i ejs express express-ejs-layouts method-override mongoose dotenv bcrypt express-session axios cors            
//install core dependicies for API-backend
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const dashboardController = require("./controllers/dashboardController")
const userController = require("./controllers/userController")
const companyController = require("./controllers/userController")

// Config app set and use-----------------------------------
app.set("port", process.env.PORT || 3000)
app.use(express.static('public'))
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:false}));
app.set('view engine', 'ejs')



// Controllers use set to app---------------
// the "home" page in this section is the index
app.use('/dashboard',dashboardController)
app.use('/login',userController)
app.use('/company',companyController)

// redirect user to login page ---------------
app.get('/', (req, res) => {
    res.redirect('/login')
  })



  app.listen(app.get("port"), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟`);
  });