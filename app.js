// import express from "express";
// const app = express();
// app.use(express.json());
// const PORT = 5000;


// let products=[]
// app.get("/products",(req,res)=>{
//     res.json(products);
// })


// app.httpmethod
// (route,callback)

// app.post("/products",(req,res)=>{
//     const p = req.body
//     products.push(p)
//     res.json({
//         message:"product added successfully",
//         data:p
//     })
// })

// let shoppingcart = []

// app.get("/cart",(req,res)=>{
//     res.status(200).json(shoppingcart)
// })

// app.post("/cart",(req,res)=>{
//     const {id,name,price,qty} = req.body
//     let x = {id,name,price,qty}
//     shoppingcart.push(x)
//     res.status(201).json({"message":"Successfully added to cart","data":x})
// })

// app.listen(PORT,()=>{
//     console.log(`Server is running on port ${PORT}`);

// })

// /*
// 10 MCQ - 1X10=10
// 5 short Questions / out of 7 =5x3=15
// 3 Long Questions / out of 4 = 3x5=15
// */

// // Express
// // NodeJS
// // Version Control
// // HTML
// // CSSz
// // how to create API ednpoint using bun



import express from "express";
const app = express();

//set the view engine to handlebars
app.set("view engine","hbs")

//see the views directory
app.set("views","views")

//middleware to handle json data

app.use(express.json());

const PORT = 5000;


let products=[]
app.get("/products",(req,res)=>{
    res.json(products);
})

app.post("/products",(req,res)=>{
    const p = req.body
    products.push(p)
    res.json({
        message:"product added successfully",
        data:p
    })
})

let shoppingcart = []

app.get("/cart",(req,res)=>{
    res.status(200).json(shoppingcart)
})

app.post("/cart",(req,res)=>{
    const {id,name,price,qty} = req.body
    let x = {id,name,price,qty}
    shoppingcart.push(x)
    res.status(201).json({"message":"Successfully added to cart","data":x})
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);

})

app.get("/new",(req,res)=>{
    res.render("home",{data:"chocolate"})
})


app.get("/old",(req,res)=>{
    res.render("home",{data:"pudding"})
})