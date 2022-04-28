const express=require('express');
const app = express();
app.listen(process.env.PORT||5000,()=>console.log("server running on port"));

app.use(express.json());

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

const itemRouter =require('./routes/item_routes')
app.use('/api/quiz',itemRouter)


