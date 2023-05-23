const express=require('express');
const app=express();

const mongoose=require('mongoose');
const bodyParser=require('body-parser');

app.use(bodyParser.json());
const postRoute=require('./routes/post');
app.use('/servicios',postRoute);

app.get('/',(req,res)=>{
res.send('prueba 1234');
});

mongoose.connect('mongodb+srv://jcpalechor2501:Q6CZ7uiG4vRpD9FZ@bd.vpzhkgo.mongodb.net/',
{useNewUrlParser:true},()=>{
    try{
    console.log('Conexion a BD');
    }
    catch(error){
        console.log(error);
    }
});


app.listen(1000);