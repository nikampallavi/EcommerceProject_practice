const express = require('express');
const path=require('path');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

// Register User
router.get('/register',(req,res)=>{
    res.sendFile((path.join(__dirname,'../public','index.html')));
})

router.post('/register', (req, res) => {
    console.log(req.body);
    const { name, email, dateOfBirth, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);

    db.query('INSERT INTO users (name, email, dateOfBirth, password) VALUES (?, ?, ?, ?)', 
    [name, email, dateOfBirth, hashedPassword], (err, results) => {
        if (err) return res.status(500).send('Server error');
        res.status(200).send('User registered successfully');
    });
});


//Login user
router.get('/login',(req,res)=>{
    res.sendFile((path.join(__dirname,'../public','login.html')));
    
})
router.post('/login',(req,res)=>{
    console.log(req.body);
    const {email,password}=req.body;

    // db.query('SELECT * FROM users WHERE email=?'[email],(err,result)=>{
    //     if(err)return res.status(500).send('server srror');
    //     if(result.legth===0)return res.status(404).send('User not found');

    //     const user=result[0];

    //     const isValidPassword=bcrypt.compareSync(password,user.password);
    //     if(!isValidPassword) return res.status(404).send('Invalid Password');

    //     const token=jwt.sign({id:user.id},'secretKey',{expiresIn:'1h'});
    //     res.status(200).send({auth:true,token});
    // });
   

 });

 





module.exports=router;