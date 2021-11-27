const Asset = require('../models/Asset');
const Staff = require('../models/Asset');
var assetDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateStaff: updateStaff
}

function findAll() {
    return Asset.findAll();
}

function findById(id) {
    return Asset.findByPk(id);
}

function deleteById(id) {
    return Asset.destroy({ where: { id: id } });
}

function create(asset) {
    var newAsset = new Asset(asset);
    return newAsset.save();
}

function updateAsset(asset, id) {
    var updateAsset = {
        type: asset.type,
        manufacturer: asset.manufacturer,
        assetclass: asset.assetclass,
        model: asset.model,
        snumber:asset. snumber,
        year:asset.year,
        producedate:asset.producedate,
        waranty:asset. waranty,
        fromdate:asset.fromdate,
        todate:asset.todate
    };
    return Asset.update(updateAsset, { where: { id: id } });
}
module.exports = assetDao;