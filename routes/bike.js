const express = require('express');

const {body, param} = require('express-validator');

const router = express.Router();

const bikeController = require('../controllers/bike');


router.post('/bike/:id',
// Validate inputs
[
  param('id').exists(),
  body('docked').exists(),
  body('lon').isNumeric(),
  body('lat').isNumeric(),
  body('km').isNumeric(),
  body('battery').custom(battery => {
    if (battery<0 || battery >100) {
      return Promise.reject('Battery value out of range.');
    }
    return Promise.resolve();
  })
], bikeController.postBikeInfo);

router.get('/bike/:id',bikeController.getBikeInfo);

//router.use('/', rootController.updateBike);


module.exports = router;
