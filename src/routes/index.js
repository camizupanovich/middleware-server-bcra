const { Router } = require('express');

const dolarValues = require('./dolarValues');

const router = Router();

router.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/home.html');
});

router.use('/usd', dolarValues);


module.exports = router;