//Deeclare router
const router = require('express').Router();

//Declare sub-routers
const v1 = require('./v1');

//Attach path
router.use('/v1', v1);

module.exports = router;