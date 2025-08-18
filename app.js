import express from "express"
import path from "path"
const app = express();

const staticPath = path.join(import.meta.dirname,"public");
app.use(express.static(staticPath))

// app.use(express.static("public"))
 
app.get("/", (req,res)=>{
// console.log(import.meta.dirname);
// res.send("HI");
// const __filename = new URL(import.meta.url).pathname;
// console.log(__filename)


const homePagePath = path.join(import.meta.dirname,"public","index.html")
res.sendFile(homePagePath)
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`Server is running at port:${PORT}`);
});