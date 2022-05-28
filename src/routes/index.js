const router = require('express').Router();
const path = require('path');


router.get('/', (req, res) => {
  res.render('pages/index');
});


module.exports = router;
