const getDriver = require('../utils/database').getDriver;
//5b3ce3597851110001cf62489f8dc3e2e8774a839b45e549efa71c6d
//https://github.com/GIScience/openrouteservice-js

module.exports = class Bike {
  /*
  id
  lat
  lon
  battery
  traveledKM
*/
  constructor(info){
    this.id = info.id;
    this.lat= info.lat;
    this.lon = info.lon;
    this.battery = info.battery;
    this.traveledKM = info.traveledKM;
    this.docked = info.docked !== undefined ? info.docked : "";
  }
  update(){
    const docked = this.docked;
    const session = getDriver().session();
    session
    .run(`
      MERGE (b:Bike {id:"${this.id}"})
      ON MATCH SET b.lat = ${this.lat}, b.lon = ${this.lon}, b.battery = ${this.battery}, b.traveledKM = ${this.traveledKM}
      ON CREATE SET b.lat = ${this.lat}, b.lon = ${this.lon}, b.battery = ${this.battery}, b.traveledKM = ${this.traveledKM}
      RETURN b.id
    `)
    .then(result =>{
      console.log('Query eseguita correttamente');
      const bikeId = result.records[0].get('b.id');
      if(docked !== ""){
        session.run(`
          MATCH (b:Bike {id:"${bikeId}"})
          with b
          MERGE (s:Station {id:"${this.docked}"})
          with s,b
          MERGE (b)-[r:DOCKED]->(s)
          with s,b
          MATCH (b)-[r1:DOCKED]->(s1)
          WHERE NOT s.id = s1.id
          DELETE r1
        `)
        .then(res =>{
          console.log("stazione collegata");
        })
        .catch(error => {
          console.log(error);
        })
        .then(()=>session.close())
      }
      else{
        session.run(`
          MATCH (b:Bike {id:"${bikeId}"})-[r:DOCKED]->(s)
          DELETE r
        `)
        .then(res =>{
          console.log("stazione scollegata");
        })
        .catch(error => {
          console.log(error);
        })
        .then(()=>session.close())
      }
    })
    .catch(error => {
      console.log(error);
    });

    console.log({
      "id": this.id,
      "lat": this.lat,
      "lon": this.lon,
      "battery": this.battery+'%',
      "traveled km": this.traveledKM
    });
  }
  dock(stationId){
    console.log('Docked to '+stationId);
  }
  undock(){
    console.log('Undocked');
  }
  static status(id){
    return new Promise((resolve,reject) => {
      let resStatus = {};
      const session = getDriver().session();
      session
      .run(`
        MATCH (b:Bike {id:"${id}"})
        with b
        OPTIONAL MATCH (b)-[r:DOCKED]->(s:Station)
        RETURN *
      `)
      .then(result =>{
        const fields = result.records[0];
        let s, b;
        //console.log(fields.get(0));
        if(!fields.get('b')) resolve(resStatus);
        b = fields.get('b').properties;
        //if(!fields.get('b').id) resolve(resStatus);
        resStatus = {
          id: b.id,
          lat: b.lat,
          lon: b.lon,
          battery: b.battery.low,
          km: b.traveledKM,
          docked: !fields.get('s') ? "" : fields.get('s').properties.id
        }
        resolve(resStatus);
      })
      .catch(error =>{
        reject(error);
        console.log(error);
      });
    });
  }
}