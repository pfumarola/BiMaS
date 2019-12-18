const { validationResult} = require('express-validator');

const Station = require('../models/station');

exports.postStation = (req, res, next) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(422).json({
      message: 'Validation failed, entered data is incorrect.', 
      errors: errors.array()
    });
  }
  const stationId = req.params.id;
  const station = new Station({
    id: req.params.id,
    lat: req.body.lat,
    lon: req.body.lon
  });
  station.save();
  res.status(201).json({
    message: 'Saved station.',
    stationId: stationId
  });
  station.calculateDistances();
}
/*
exports.getStations = (req, res, next) => {
  
}*/