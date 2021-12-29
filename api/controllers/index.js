const isLoggedIn = require('./userControllers/isLoggedIn.controller');
const signup = require('./userControllers/signup.controller');
const login = require('./userControllers/login.controller');
const logout = require('./userControllers/logout.controller');
const favourite = require('./userControllers/favourite.controller');

module.exports = {
  userController: { isLoggedIn, signup, login, logout, favourite },
};
