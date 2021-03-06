define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/apidoc/main.js",
    "group": "/home/pafu/docker/bimas/BiMaS/docs/apidoc/main.js",
    "groupTitle": "/home/pafu/docker/bimas/BiMaS/docs/apidoc/main.js",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/template/main.js",
    "group": "/home/pafu/docker/bimas/BiMaS/docs/template/main.js",
    "groupTitle": "/home/pafu/docker/bimas/BiMaS/docs/template/main.js",
    "name": ""
  },
  {
    "type": "get",
    "url": "bike/:id",
    "title": "Ottieni info del veicolo",
    "name": "GetBike",
    "group": "Bike",
    "description": "<p>Ottieni info del veicolo.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id della bici.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "lon",
            "description": "<p>Longitudine della bici.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "lat",
            "description": "<p>Latitudine della bici.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "km",
            "description": "<p>KM percorsi.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "size": "0-100",
            "optional": false,
            "field": "battery",
            "description": "<p>Percentuale di carica della batteria della bici.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/bike.js",
    "groupTitle": "Bike"
  },
  {
    "type": "post",
    "url": "bike/:id",
    "title": "Aggiorna info del veicolo",
    "name": "PostBike",
    "group": "Bike",
    "description": "<p>Aggiorna info del veicolo.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id della bici.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "docked",
            "description": "<p>Id delle stazione a cui la bici è attraccata, stringa vuota se non è attraccata.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lon",
            "description": "<p>Longitudine attuale della bici.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lat",
            "description": "<p>Latitudine attuale della bici.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "km",
            "description": "<p>KM percorsi.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "size": "0-100",
            "optional": false,
            "field": "battery",
            "description": "<p>Percentuale di carica della batteria della bici.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Messaggio: 'Bike info update.'</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bikeId",
            "description": "<p>Id della bici.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/bike.js",
    "groupTitle": "Bike"
  }
] });
