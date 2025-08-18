import express from "express"

const app = express();

app.get("/", (req,res)=>
res.send ("Hello"));


app.get("/home", (req,res)=>
res.send ("Home"));


app.get("/about", (req,res)=>
res.send ("About"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`Server is running at port:${PORT}`);
});