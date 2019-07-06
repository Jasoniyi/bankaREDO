import uuid from 'uuid';

class Users {
  /**
   * class constructor
   * @params {object} data
   */
  constructor() {
    this.users = [];
  }

  /**
   *
   * @returns {object} user object
   */
  create(data) {
    const newUser = {
      id: uuid.v4(),
      email: data.email || '',
      firstname: data.firstname || '',
      lastname: data.lastname || '',
      password: data.password || '',
      type: data.type || '',
      isAdmin: data.isAdmin || ''
    };
    this.users.push(newUser);
    return newUser;
  }
}

export default new Users();
