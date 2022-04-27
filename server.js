const express=require('express');
const app = express();
app.listen(process.env.PORT||5000,()=>console.log("server running on port"));

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res)=>{
    res.send("Hello world!");
})