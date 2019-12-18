const express = require('express');

const {body, param} = require('express-validator');

const router = express.Router();

const stationController = require('../controllers/station');

router.post('/station:id',[
  param('id').exists(),
  body('lon').isNumeric(),
  body('lat').isNumeric(),
],stationController.postStation);
//router.get('/stations',stationController.getStations);