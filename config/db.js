
const mysql=require('mysql');
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root@123',
    database:'Ecommercedb'
});

connection.connect((error)=>{
    if(error) throw error;
    console.log('connected to database');
})

module.exports=connection;