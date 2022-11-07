const UserDetails = require('../models/userDetails');

const getHome = (req, res) => {
  res.render('index', { title: 'Home' });
};

const getLogin = (req, res) => {
  res.render('login', { title: 'Login' });
};

const getRegister = (req, res) => {
  res.render('register', { title: 'Register' });
  
 
      
};
const postRegister = (req, res) => {

    let name = req.body.username;
    let pass = req.body.password;
    UserDetails.register({username:name, active: false}, pass);
    res.redirect('/login');
      
}
const postLogin = (req, res) => {
  console.log(req.user);
}

const getDashboard = (req, res) =>{
  res.render('dashboard', { title: 'Dashboard' })
}

const logOut = (req, res)=>{
  req.logout(()=>{
  console.log("Logging out!")
  });
  res.redirect('/');
}



module.exports = { getHome, getLogin, postLogin, getDashboard, logOut,getRegister,postRegister };
