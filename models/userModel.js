import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema(
  {
    name: String,
    require: true,
  },
  {
    password: String,
    require: true,
  },
  {
    timestamps: true,
  },
);

userSchema.methods.matchPassword() = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}
// we can later use Salt
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);

export default User;
