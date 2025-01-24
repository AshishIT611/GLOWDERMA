import express from "express";
const router=express.Router();
let data=[
    {
        name:"Smaranjit",
        price:100
    },
    {
        name:"Skin Brightening",
        price:1000
    },
    {
        name:"Skin",
        price:1000
    }
]
router.get("/products",(req,res)=>{
    res.status(200).json(data);
})
module.exports={router};