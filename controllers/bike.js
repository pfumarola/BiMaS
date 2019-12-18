const { validationResult} = require('express-validator');

const Bike = require('../models/bike');
const Station = require('../models/station');

exports.postBikeInfo = (req, res, next) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(422).json({
      message: 'Validation failed, entered data is incorrect.', 
      errors: errors.array()
    });
  }
  const bikeId = req.params.id;
  const bike = new Bike({
    id: req.params.id,
    docked: req.body.docked,
    lat: req.body.lat,
    lon: req.body.lon,
    battery: req.body.battery,
    traveledKM: req.body.km
  });
  bike.update();
  if(req.body.docked !== ""){
    if(Station.exists(req.params.docked))
      bike.dock(req.body.docked);
    else
      return res.status(404).json({
        message: 'Docking station not found.'
      });
  }
  else{
    bike.undock();
  }
  res.status(201).json({
    message: 'Bike info update.',
    BikeId: bikeId
  });
}

exports.getBikeInfo = (req, res, next) => {
  const bikeId = req.params.id;
  const status = Bike.status(bikeId);
  if(status.id)
    return res.status(200).json(status);

  res.status(404).json({
    message: 'Bike with id '+bikeId+' not found',
  });
}