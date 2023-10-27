const { Router } = require('express');

const dolarValues = require('./dolarValues');

const router = Router();

router.use('/usd', dolarValues);


module.exports = router;