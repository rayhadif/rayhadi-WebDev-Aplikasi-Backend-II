const { urlServices } = require('../services');
const { responseHelper } = require('../helper');

const getUrls = async (req, res) => {
    try {

        const urls = await urlServices.getUrls();
        if(urls instanceof Error) {
            throw new Error(urls);
        } 
        res.status(responseHelper.status.success).json(urls);
        
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}

const getUrlByMailAndPhone = async (req, res) => {
    try {
        const { email,telepon } = req.body;
        const url = await urlServices.getUrlByMailAndPhone(email,telepon);
        
        res.status(responseHelper.status.success).json(url);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}

const getUrlByName = async (req, res) => {
    try {
        const { nama } = req.body;
        const url = await urlServices.getUrlByName(nama);
        
        res.status(responseHelper.status.success).json(url);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}

const patchUrlByName = async (req, res) => {
    try {
        const { nama,angkatan,email,telepon,deskripsi } = req.body;
        const url = await urlServices.patchUrlByName(nama,angkatan,email,telepon,deskripsi,req.body['jeniskelamin']);

        if(url instanceof Error) {
            throw new Error(url);
        }

        res.status(responseHelper.status.success).json(url);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}

const deleteUrlByMail = async (req, res) => {
    try {
        const { email } = req.body;
        const url = await urlServices.deleteUrlByMail(email);
        
        res.status(responseHelper.status.success).json(url);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}

const createpraktikan = async (req, res) => {
    try {
        const { nama,angkatan,email,telepon,deskripsi } = req.body;
        const url = await urlServices.createpraktikan(nama,angkatan,email,telepon,deskripsi,req.body['jeniskelamin']);
        
        if(url instanceof Error) {
            throw new Error(url);
        }

        res.status(responseHelper.status.success).json(url);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}

const bulkpraktikan = async (req, res) => {
    try {
        const url = await urlServices.bulkpraktikan(JSON.stringify(req.body));
        
        if(url instanceof Error) {
            throw new Error(url);
        }

        res.status(responseHelper.status.success).json(url);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}

module.exports = {
    getUrls,
    getUrlByName,
    getUrlByMailAndPhone,
    patchUrlByName,
    deleteUrlByMail,
    createpraktikan,
    bulkpraktikan
}