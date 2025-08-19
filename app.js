import express from "express"
import path from "path"
import {PORT} from "./env.js"
const app = express();

const staticPath = path.join(import.meta.dirname,"public");
app.use(express.static(staticPath))
app.use(express.urlencoded({extended: true}))

app.post("/contact", (req,res)=>{
    res.redirect("/")
    console.log(req.body);
})

app.use((req,res)=>{
    res.status(404).sendFile(path.join(import.meta.dirname, "views", "404.html"))
})
app.listen(PORT, () =>{
    console.log(`Server is running at port 3000`);
}); 