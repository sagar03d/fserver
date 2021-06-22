const catchAsync = require('../catchAsync');
const User = require('../../models/User');

const index = (async (req, res) => {
  res.render('admin/chat');
});


module.exports = {
  index
}