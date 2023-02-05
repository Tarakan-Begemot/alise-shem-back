import expressAsyncHandler from 'express-async-handler';
import User from '../models/userModel';

const userAuth = expressAsyncHandler(async (req, res) => {
  const { name, password } = req.body;
  const user = await User.findOne({ name, password });
  if (user && (await user.matchPassword(password))) {
    res.json({ name: user.name });
  } else {
    res.status(401);
    throw new Error('Invalid Password');
  }
});

export default userAuth;
