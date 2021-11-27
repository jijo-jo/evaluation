const express = require('express');
const router = express.Router();
const assetController = require('../controller/asset.controller');

router.post('/', assetController.addAss);
router.get('/', assetController.findAssets);
router.get('/:id', assetController.findAssets);
router.put('/:id', assetController.updateAsset);
router.delete('/:id', assetController.deleteById);

module.exports = router;
