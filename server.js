require('dotenv').config();
const express=require('express');
const app = express();
const cors= require('cors');
app.use(cors({origin:'*'}));
app.use(express.json());
let PORT = process.env.PORT || 3000;
app.use(express.static("public"));
app.listen(PORT,()=>console.log("server running on port" +": " + PORT) );
//import model


//Define static
app.use(express.static("public"));


const itemRouter =require('./routes/item_routes');
app.use('/api/quiz',itemRouter);