const users = [];
module.exports = class User {
  constructor(){
    console.log('Constructor user');
  }
  save(){
    console.log('Saved User');
  }
}