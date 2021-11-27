const express = require('express');
const router = express.Router();
const assetRoutes = require('./asset.route');

router.use('/assets', staffRoutes);
module.exports = router;