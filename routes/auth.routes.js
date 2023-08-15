const authController = require('../controllers/auth.controller');
const authValidator = require('../middlewares/auth.validator');
const routes = (app) => { // the app parameter is the express app only
    // route -> controller function
    app.post(
        '/ecom/api/v1/signup',
        authValidator.validateSignup,
        authController.signup
        );
}

module.exports = routes; 