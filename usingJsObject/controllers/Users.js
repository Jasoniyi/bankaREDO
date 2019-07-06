import UserModel from '../models/UserModel';
import Helper from './Helper';

const User = {
  /**
   * @params {object} req
   * @params {object} res
   * @returns {object} user object
   */
  signup(req, res) {
    if (
      !req.body.email
      || !req.body.firstname
      || !req.body.lastname
      || !req.body.password
      || !req.body.type
      || !req.body.isAdmin
    ) {
      return res.status(400).send({ message: 'Please complete all fields' });
    }
    if (!Helper.isValid(req.body.email)) {
      return res.status(400).send({ message: 'Please input a valid email' });
    }
    const hashPassword = Helper.hashPassword(req.body.password);

    const user = UserModel.create(req.body);
    const token = Helper.generateToken(user.id);

    const userSchema = {
      token,
      id: user.id,
      email: user.email,
      firstname: user.firstname,
      lastname: user.lastname,
      password: hashPassword,
      type: user.type,
      isAdmin: user.isAdmin
    };
    return res.status(200).json({
      status: 200,
      data: userSchema
    });
  }
};

export default User;
