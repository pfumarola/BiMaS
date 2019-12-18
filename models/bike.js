const bike = [];
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
  }
  update(){
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
    if(id == 1234)
      return {
        "id": id,
        "lat": "lat",
        "lon": "lon",
        "battery": 100,
        "km": 100
      }
    return {}
  }
}