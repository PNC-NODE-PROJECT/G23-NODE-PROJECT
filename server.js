require('dotenv').config();
const express=require('express');
const app = express();
const cors= require('cors');
app.use(cors({origin:'*'}));
app.use(express.json());
let port = process.env.PORT || 3000;
app.use(express.static("public"));
app.listen(port,()=>console.log("server running on port" +": " + port) );
//import model
const quizModel =require("./models/quiz_models");

//Define static
// app.use(express.static("public"));

//Get Quiz
app.get('/quizs',(req,res)=>{
    let getAllQuizes=quizModel.getAllQuizes();
    res.send(getAllQuizes);
})
//Create 
app.post('/quiz',(req,res)=>{
    let quizOne =req.body;
   let quize = quizModel.createNewQuiz(quizOne);
    res.send(quize);
})
// Delete
app.delete('/deleleQuiz/:id',(req,res)=>{
    let id =req.params.id;
    console.log(id);
    quizModel.deleleQuiz(id);
    res.send('DELETE SUCCESS')
})
//Update
app.patch('/updateQuiz/:id',(req,res)=>{
    let id =req.params.id;
    quizModel.updateQuiz(id);
    res.send("success");
})
const itemRouter =require('./routes/item_routes');
app.use('/api/quiz',itemRouter);