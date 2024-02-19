import productDao from "../dao/products.dao.js";
const productController = {}

productController.getAll = async (req, res) => {
   productDao.getAll()
   //PROMESA
   .then(products => {
    if(products != null){
      res.status(200).send(products)
    }else{
      res.json({
         "status":"not found"
      })
    }
   }).catch(err => {
    res.status(404).json("Error")
   })
}

productController.getOne = async (req, res) => {
   productDao.getOne(req.params.barcode)
   .then(product => {
      if(product!= null){
         res.status(200).send(product)
   }
   else{
      res.json({
         "status":"not found"
      })
   }
   })
   .catch(err => {
      console.log(err.msg)
      res.status(500).json({"status":"Server unaviable"})
   })
}

productController.insertOne = async (req, res) => {
productDao.insertOne(req.body)
.then(result => {
  if(result)
   res.status(201).send({"status":"created"})
}).catch(err => {
   res.status(500).json({"status":"Server unaviable"})
})
}


productController.updateOne = async (req, res) => {
   productDao.updateOne(req.params.barcode, req.body)
   .then(result => {
      if(result){

         res.status(200).send({"status":"updated"})
      }
   })
   .catch(err => {
      res.status(500).json({"status":"Server unaviable"});
   });
};


productController.deleteOne = async (req, res) => {
   productDao.deleteOne(req.params.barcode)
   .then(result => {
      if(result){
         res.status(200).send({"status":"deleted"})
      }
   })
   .catch(err => {
      res.status(500).json({"status":"Server unaviable"})
   })

}


export default productController;