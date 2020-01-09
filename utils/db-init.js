/*
* Run this file on new db instances
*/
const connectDB = require('./database').connectDB;
const getDriver = require('./database').getDriver;

connectDB(()=>{
  console.log("Connesso al DB")
});
const session = getDriver().session();
    session
    .run('CREATE CONSTRAINT ON (b:Bike) ASSERT b.id IS UNIQUE')
    .then(result =>{
      console.log('Vincolo aggiunto correttamente');
    })
    .catch(error => {
      console.log(error);
    })
    .then(() => session.close());