const express = require('express')
const app = express()
const  { Client }  = require('pg')
const bp = require('body-parser')
app.use(bp.json())
app.use(bp.urlencoded({extended:true}))

const db = new Client({
    //Tambahkan parameter yang sesuai untuk melakukan koneksi dengan database
})

db.connect((err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log('Database berhasil terkoneksi')
})

app.get('/',(req,res)=>{
    db.query(/*Masukan Query untuk menampilkan seluruh data pada tabel */ ,(err,results)=>{
        if(err){
            console.log(err)
            return
        }
        res.send(results.rows)
    })

})

app.post('/insert',(req,res)=>{
    db.query(/*Masukan Query untuk menambahkan data baru secara dinamis*/,(err)=>{
        if(err){
            console.log(err)
            return
        }
        res.send(/*Tampilkan pesan respon yang sesuai */)
    })
})

app.put('/update',(req,res)=>{
    db.query(/*Masukan Query untuk mengupdate data berdasarkan nomor_seri*/,(err)=>{
        if(err){
            console.log(err)
            return
        }
        res.send(/*Tampilkan pesan respon yang sesuai */)
    })
})

app.delete('/delete',(req,res)=>{
    db.query(/*Masukan Query untuk menghapus data berdasarkan nomor_seri*/,(err)=>{
        if(err){
            console.log(err)
            return
        }
        res.send(/*Tampilkan pesan respon yang sesuai */)
    })
})

app.listen(/*Isi dengan 4 digit terakhir NIM Anda, jika ada '0' atau angka kembar silakan diganti dan diberi keterangan */,()=>{
    console.log(/*Tampilkan pesan bahwa port berhasil berjalan di nomor port yang Anda definisikan */)
})