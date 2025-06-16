const products = require('../modal/model')
  


exports.addProducts = async(req,res)=>{    
    const {name,category,price,inStock} = req.body
    
    console.log(req.body);   
    try{
        const newProduct = new products({
            name,category,price,inStock
        })
        await newProduct.save()
        res.status(200).json({message:"products added",newProduct})


    }catch(err){
        res.status(401).json({message:'something wrong',err})
    }
}


// edit produts
exports.editProducts = async(req,res)=>{
    const {name,category,price,inStock} = req.body
    const{id} = req.params
    try{
      const editedProducts= await products.findByIdAndUpdate(id,{
        name,category,price,inStock
      },{new:true})
      res.status(200).json(editedProducts)
    }catch(err){
        res.status(401).json(err)
    }
}


// get all products

exports.getAllProducts = async(req,res)=>{
    try{
  const allProducts = await products.find()
  res.status(200).json(allProducts)
    }catch(err){
        res.status(401).json(err)
    }
}

// delete produtc
exports.deleteproducts = async(req,res)=>{
    const{id} = req.params
    try{
      const dleteProduct= await products.findByIdAndDelete(id)
      res.status(200).json({message:"products deleted",dleteProduct})
    }catch(err){
        res.status(401).json(err)
    }
}