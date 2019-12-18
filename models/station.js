var openrouteservice = require("openrouteservice-js");

const station = [];

// add your api_key here
var Matrix = new openrouteservice.Matrix({
  api_key: "5b3ce3597851110001cf62489f8dc3e2e8774a839b45e549efa71c6d"
});

module.exports = class Station {
  /*
  id;
  lon;
  lat;
  districtId;
  */
  constructor(info){
    this.id = info.id;
    this.lat= info.lat;
    this.lon = info.lon;
  }
  save(){
    console.log({
      "id": this.id,
      "lat": this.lat,
      "lon": this.lon
    });
  }
  static exists(id){
    return true;
  }
  static getStationById(id){
    return new Station({});
  }
    
  calculateDistances(){
    //Da aggiungere  locations: [[this.lon, this.lat], ...this.stations],
    Matrix.calculate({
      locations: [[this.lon, this.lat], [8.687868, 49.390139], [8.687868, 49.390133]],
      profile: "driving-car",
      sources: [0],
      destinations: ['all'],
      metrics:['distance', 'duration'],
      units: "km"
    })
      .then(function(response) {
        console.log("response", response);
      })
      .catch(function(err) {
        var str = "An error occured: " + err;
        console.log(str);
      });
  }

}


