require('dotenv').config();
const express=require('express');
const app = express();
// To allow any origin
const cors= require('cors');
app.use(cors({origin:'*'}));
// To read json data in request body
app.use(express.json());
let PORT = process.env.PORT || 3000;
app.use(express.static("public"));
app.listen(PORT,()=>console.log("server running on http://localhost:" + PORT) );


//Define static
app.use(express.static("public"));

//
const itemRouter =require('./routes/item_routes');
app.use('/api/quiz',itemRouter);