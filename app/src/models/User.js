"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  async login() {
    const client = this.body;
    const {id, pswd} = await UserStorage.getUserInfo(client.id)
    
    if (id) {
      if (id === client.id && pswd === client.pswd) {
        return { success: true };
      }
      return { success: false, msg: '비밀번호가 틀렸습니다.'};
    }
    return { success: false, msg: "존재하지 않는 아이디입니다."};
  }

  register() {
    const client = this.body;
    UserStorage.save(client);
  }
}

module.exports = User;