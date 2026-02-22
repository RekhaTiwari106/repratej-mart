const express = require("express");
const path = require("path");
const { saveUser } = require("./db");

const app = express();
app.use(express.json());
app.use(express.static("public"));

app.post("/save", async (req,res)=>{
   await saveUser(req.body);
   res.send("saved");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log("Server running"));