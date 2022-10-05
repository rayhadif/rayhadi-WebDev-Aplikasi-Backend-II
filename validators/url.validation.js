const {  body } = require('express-validator');
const { validator } = require('./validator');


const getUrlByName  = [
    body('nama').isLength({min: 8}),
    validator
]

const getUrlByMailAndPhone  = [
    body('email').isEmail(),
    body('telepon').isLength(12),
    validator
]

const patchUrlByName  = [
    body('nama').isLength({min: 8}),
    body('jeniskelamin').isIn(['P','L']),
    body('angkatan').custom((value)=>value>2018 ? true:false),
    body('email').isEmail(),
    body('telepon').isLength(12),
    body('deskripsi').custom((value)=>value=='' ? false:true),
    validator
]

const deleteUrlByMail  = [
    body('email').isEmail(),
    validator
]

const createpraktikan  = [
    body('nama').isLength({min: 8}),
    body('jeniskelamin').isIn(['P','L']),
    body('angkatan').custom((value)=>value>2018 ? true:false),
    body('email').isEmail(),
    body('telepon').isLength(12),
    body('deskripsi').custom((value)=>value=='' ? false:true),
    validator
]

const bulkpraktikan  = [
    body('*.nama').isLength({min: 8}),
    body('*.jeniskelamin').isIn(['P','L']),
    body('*.angkatan').custom((value)=>value>2018 ? true:false),
    body('*.email').isEmail(),
    body('*.telepon').isLength(12),
    body('*.deskripsi').custom((value)=>value=='' ? false:true),
    validator
]

module.exports = {
    getUrlByName,
    getUrlByMailAndPhone,
    patchUrlByName,
    deleteUrlByMail,
    createpraktikan,
    bulkpraktikan,
}
