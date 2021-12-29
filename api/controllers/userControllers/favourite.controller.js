const { User } = require('../../models');

// @route GET: /api/user/favourite
module.exports = async (req, res) => {
  try {
    const { coin_id } = req.params;
    const favourites = req.user?.favourites || [];
    // console.log({ favourites });
    if (!!favourites.length) {
      if (favourites.includes(coin_id)) {
        const newFav = favourites.filter((fav) => fav !== coin_id);
        const newUser = await User.findByIdAndUpdate(
          { _id: req.user._id },
          { favourites: newFav || [] },
          {
            new: true,
            useFindAndModify: false,
            runValidators: true,
          }
        );
        res.status(200).json(newUser);
      } else {
        const newUser = await User.findByIdAndUpdate(
          { _id: req.user._id },
          { favourites: [...favourites, coin_id] },
          {
            new: true,
            useFindAndModify: false,
            runValidators: true,
          }
        );
        res.status(200).json(newUser);
      }
    } else {
      const newUser = await User.findByIdAndUpdate(
        { _id: req.user._id },
        { favourites: [coin_id] },
        {
          new: true,
          useFindAndModify: false,
          runValidators: true,
        }
      );
      res.status(200).json(newUser);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'something went wrong' });
  }
};
