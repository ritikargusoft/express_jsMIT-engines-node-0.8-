import express from "express"

const app = express();

app.get("/", (req,res)=>
res.send ("Hello"));

const PORT = 3000;
app.listen(PORT, () =>{
    console.log(`Server is running at port:${PORT}`);
});