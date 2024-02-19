import productDao from "../dao/products.dao.js";
const productController = {}

productController.getAll = async (req, res) => {
    productDao.getAll()
        .then(products => {
            if (products != null) {
                res.render('../src/views/index.ejs', {
                    products
                });
            } else {
                res.json({
                    "status": "not found"
                });
            }
        })
        .catch(err => {
            res.status(404).json("Error");
        });
}

productController.getOne = async (req, res) => {
    productDao.getOne(req.params.barcode)
        .then(product => {
            if (product != null) {
                res.render('../src/views/update.ejs', {
                    product
                });
            } else {
                res.json({
                    "status": "not found"
                });
            }
        })
        .catch(err => {
            console.log(err.msg);
            res.status(500).json({ "status": "Server unaviable" });
        });
}

productController.insertOne = async (req, res) => {
    productDao.insertOne(req.body)
        .then(result => {
            if (result) {
                res.redirect('/');
            }
        })
        .catch(err => {
            res.status(500).json({ "status": "Server unaviable" });
        });
}

productController.updateOne = async (req, res) => {
    const barcode = req.params.barcode;
    const updatedProduct = req.body;  
 
    try {
       const result = await productDao.updateOne(barcode, updatedProduct);
       if (result) {
          console.log('Producto actualizado con éxito.');
          res.redirect('/');
       } else {
          console.log('No se pudo actualizar el producto.');
          res.status(500).send('Error interno del servidor');
       }
    } catch (error) {
       console.error('Error al actualizar el producto:', error);
       res.status(500).send('Error interno del servidor');
    }
 }

productController.deleteOne = async (req, res) => {
    productDao.deleteOne(req.params.barcode)
        .then(result => {
            if (result) {
                res.status(200).redirect('/');
            }
        })
        .catch(err => {
            res.status(500).json({ "status": "Server unaviable" });
        });
}

export default productController;
