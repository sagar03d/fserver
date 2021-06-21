const catchAsync = require('../catchAsync');
const User = require('../../models/User');

const index = (async (req, res) => {
  res.render('admin/login');
});

const login = catchAsync(async (req, res) => {
  const { name,email,mobile, password } = req.body;
  var ssn = req.session;
  User.findOne({email:email})
        .then(user => {
          if(user)
          {
            ssn.userId = user._id;
            res.json({"success": true});
          }
        else
        {
          res.status(401).json({"success": false,"message" : "You are not allowed here."});
        }
          /*else
          {
            const newUser = new User({
                name,
                email,
                mobile,
                password
            });

            newUser.save()
              .then(user => {
                res.json(['success' ,true]);
              })
              .catch(err => console.log(err));
          }*/
        })
});

module.exports = {
  index,
  login
}