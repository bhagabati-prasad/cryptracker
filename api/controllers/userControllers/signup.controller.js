const { User } = require('../../models');
const { generateToken } = require('../../utils/authToken');

// @route  POST: /api/user/signup
module.exports = async (req, res) => {
  try {
    const { email } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
      res.status(400).json({ error: 'email already in use' });
    } else {
      const newUser = new User({
        ...req.body,
      });
      const registeredUser = await newUser.save();
      // Generate token
      const token = generateToken(registeredUser._id);

      res.cookie('access-token', token, {
        maxAge: 1000 * 60 * 60 * 24 * 4,
        httpOnly: process.env.NODE_ENV === 'production',
        secure: process.env.NODE_ENV === 'production',
      });
      res.status(200).json({ isLoggedIn: true, user: registeredUser });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
