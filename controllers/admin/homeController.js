const catchAsync = require('../catchAsync');
const User = require('../../models/User');

const index = (async (req, res) => {
  // req.session.userId = null;
  res.render('admin/home');
});


module.exports = {
  index
}