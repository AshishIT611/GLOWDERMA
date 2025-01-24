const express=require("express");
const path=require("path");
const app=express();
const PORT=process.env.PORT || 3000;
app.use((req,res,next)=>{
    const datetime=new Date().toString();
    console.log(`${datetime} | ${req.method} | ${req.path}`);
    next();
});
app.use("/assets",express.static(path.join(__dirname,"public")));