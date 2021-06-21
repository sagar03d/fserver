const catchAsync = require('../controllers/catchAsync');
const User = require('../models/User');

module.exports.isAuthorized  = function(req, res, next) {

    User.findById(req.session.userId).exec(function (error, user) {
        if (error) {
            return next(error);
        } else {      
            if (user === null) {     
                res.redirect('/admin');
            } else {
                return next();
            }
        }
    });
}