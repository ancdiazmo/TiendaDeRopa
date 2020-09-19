var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/QuienesSomos', function(req, res, next) {
  res.render('QuienesSomos', { title: 'Quienes somos' });
});

router.get('/Productos', function(req, res, next) {
  res.render('Productos', { title: 'Productos' });
});

router.get('/Partners', function(req, res, next) {
  res.render('Partners', { title: 'Partners' });
});

router.get('/NuestraExperiencia', function(req, res, next) {
  res.render('NuestraExperiencia', { title: 'NuestraExperiencia' });
});
module.exports = router;

