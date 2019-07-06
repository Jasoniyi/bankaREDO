import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const Helper = {
  /**
   * validate email
   * @param {string} email
   * @returns {Boolean} true or not
   */
  isValid(email) {
    return /\S+@\S+\.\S+/.test(email);
  },
  /**
   * compare password
   * @params {string} password
   * @params {string} hashPassword
   * @returns {Boolean} true or false
   */
  comparePassword(hashPassword, password) {
    return bcrypt.compareSync(password, hashPassword);
  },
  /**
   * hashpassword
   * @params {string} password
   * @returns {string} hashed password
   */
  hashPassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
  },
  /**
   * generate token
   * @params {string} id
   * @returns {string} token
   */
  generateToken(id) {
    const token = jwt.sign(
      {
        userId: id
      },
      process.env.SECRET,
      { expiresIn: '7d' }
    );
    return token;
  }
};

export default Helper;
