"use strict";

class UserStorage {
  static #users = {
    id: ["123"],
    pswd: ["123"],
    name: ['우리밋']
  };

  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users);
    const userInfo = usersKeys.reduce((newUser, info) => {
        newUser[info] = users[info][idx];
        return newUser;
    }, {});

    return userInfo
  }
}

module.exports= UserStorage;