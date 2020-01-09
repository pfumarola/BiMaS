const express = require('express');

const {body, param} = require('express-validator');

const router = express.Router();

const bikeController = require('../controllers/bike');


/**
 * @api {post} bike/:id Aggiorna info del veicolo
 * @apiName PostBike
 * @apiGroup Bike
 *
 * @apiDescription Aggiorna info del veicolo.
 *
 * @apiParam {String} id Id della bici.
 * @apiParam {String} docked Id delle stazione a cui la bici è attraccata, stringa vuota se non è attraccata.
 * @apiParam {Number} lon Longitudine attuale della bici.
 * @apiParam {Number} lat Latitudine attuale della bici.
 * @apiParam {Number} km KM percorsi.
 * @apiParam {number{0-100}} battery Percentuale di carica della batteria della bici.
 * 
 * @apiSuccess {String} message Messaggio: 'Bike info update.'
 * @apiSuccess {String} bikeId Id della bici.
 */
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

/**
 * @api {get} bike/:id Ottieni info del veicolo
 * @apiName GetBike
 * @apiGroup Bike
 *
 * @apiDescription Ottieni info del veicolo.
 * 
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} id Id della bici.
 * @apiSuccess {Number} lon Longitudine della bici.
 * @apiSuccess {Number} lat Latitudine della bici.
 * @apiSuccess {Number} km KM percorsi.
 * @apiSuccess {number{0-100}} battery Percentuale di carica della batteria della bici.
 * 
 *
 */
router.get('/bike/:id',bikeController.getBikeInfo);

//router.use('/', rootController.updateBike);


module.exports = router;
