import express from "express"
import path from "path"
const app = express();

const staticPath = path.join(import.meta.dirname,"public");
app.use("/public", express.static(staticPath))

app.get("/profile/:username", (req,res)=>{
    console.log(req.params);
    res.send(`<h1> My name is ${req.params.username}</h1>`)
})

app.get("/profile/:username/article/:slug", (req,res)=>{
    console.log(req.params);
    res.send(`<h1> Article ${req.params.username} by ${req.params.slug}</h1>`)
})




const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`Server is running at port:${PORT}`);
});