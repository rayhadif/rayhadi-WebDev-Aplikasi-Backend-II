const { databaseQuery } = require('../database');

const getUrls = async () => {
    try {
        const query = `SELECT * FROM praktikan_webdev`;
        const result = await databaseQuery(query);
        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error;
    }
}

const getUrlByName = async (nama) => {
    try {
        const query = `SELECT * FROM praktikan_webdev WHERE nama='${nama}'`;
        const result = await databaseQuery(query);

        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error
    }
}

const getUrlByMailAndPhone = async (email,telepon) => {
    try {
        
        const query = `SELECT * FROM praktikan_webdev WHERE "email"='${email}' and "telepon"='${telepon}'`;
        const result = await databaseQuery(query);


        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error
    }
}

const patchUrlByName = async (nama,angkatan,email,telepon,deskripsi,jeniskelamin) => {
    try {

        const query = `UPDATE praktikan_webdev SET "jeniskelamin"='${jeniskelamin}', "angkatan"='${angkatan}', "email"='${email}', "telepon"='${telepon}', "deskripsi"='${deskripsi}' WHERE "nama"='${nama}'`;
        const result = await databaseQuery(query);

        
        if (!result) {
            throw new Error('Error updating URL');
        }
        if (result.rowCount === 0) {
            throw new Error('URL not found');
        }
        return {
            message: 'URL updated successfully',
        };

    } catch (error) {
        return error
    }
}

const deleteUrlByMail = async (email) => {
    try {
        const query = `DELETE FROM praktikan_webdev WHERE "email"='${email}'`;
        const result = await databaseQuery(query);


        if (!result) {
            throw new Error('Error deleting URL');
        }
        if (result.rowCount === 0) {
            throw new Error('URL not found');
        }
        return {
            message: 'URL deleted successfully',
        }; 
    } catch (error) {
        return error
    }
}

const bulkpraktikan = async (POM) => {
    try {
        let BAN = []
        JSON.parse(POM,(a,b)=>{BAN.push(b)})
        for (let a=0;a<(BAN.length-1)/7;a++){
            const query = `insert into praktikan_webdev values ('${BAN[a*7]}','${BAN[(a*7)+1]}','${BAN[(a*7)+2]}','${BAN[(a*7)+3]}','${BAN[(a*7)+4]}','${BAN[(a*7)+5]}')`;
            const result = await databaseQuery(query);
            if (!result) {
                throw new Error('Error updating URL');
            }
            if (result.rowCount === 0) {
                throw new Error('URL not found');
            }   
        }
        return {
            message: 'URL updated successfully',
        };
        
    } catch (error) {
        return error
    }
}

const createpraktikan = async (nama,angkatan,email,telepon,deskripsi,jeniskelamin) => {
    try {
        const query = `insert into praktikan_webdev values ('${nama}','${jeniskelamin}','${angkatan}','${email}','${telepon}','${deskripsi}')`;
        const result = await databaseQuery(query);

        if (!result) {
            throw new Error('Error updating URL');
        }
        if (result.rowCount === 0) {
            throw new Error('URL not found');
        }
        return {
            message: 'URL updated successfully',
        };

    } catch (error) {
        return error
    }
}

module.exports =  {
    getUrls,
    getUrlByName,
    getUrlByMailAndPhone,
    patchUrlByName,
    deleteUrlByMail,
    createpraktikan,
    bulkpraktikan
}