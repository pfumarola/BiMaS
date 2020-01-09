const neo4j = require('neo4j-driver').v1

const uri = process.env.URIDB || 'bolt://db.bimas.paolofumarola.it:7687';
const user = process.env.USERDB || 'neo4j';
const password = process.env.PSSWDDB || 'neo4j';
let _driver;

const connectDB = callback => {
  console.log('Connecting to db '+uri+'...');
  _driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
  _driver.onCompleted = () => {
    console.log('DB Driver created');
    callback();
  }
  _driver.onError = error => {
    console.log(error);
    //setTimeout(() => {connectDB(callback)}, 20000);
  }
};

const getDriver = () =>{
  if(_driver){
    return _driver;
  }
  throw 'Nessun database trovato!';
};

exports.connectDB = connectDB;
exports.getDriver = getDriver;