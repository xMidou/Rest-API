var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/login', (req, res) => {
    res.render('app/admin/category/login');
    
  })

module.exports = router;
