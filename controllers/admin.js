const Product = require('../models/product')


exports.getProducts = (req,res,next)=>{
    const products = Product.getAll();
    res.render('admin/products',
    {title: 'Admin Products',
     products: products,
     path : '/admin/products'
     })
};

exports.getAddProduct = (req,res,next)=>{
    res.render('admin/add-product',{
        title : 'Add New Product',
        path : '/admin/add-product'
    });
  
};

exports.postAddProduct =(req,res,next)=>{
    const product = new Product(req.body.name,req.body.price,req.body.image,req.body.description);
    product.savePRoduct();
    res.redirect('/');
}

exports.getEditProduct = (req,res,next)=>{
    res.render('admin/edit-product',{
        title : 'edit  Product',
        path : '/admin/edit-product'
    });
  
};

exports.postEditProduct =(req,res,next)=>{
    res.redirect('/');
}