const Product = require('../models/product')


exports.getIndex = (req,res,next)=>{
    const products = Product.getAll();
    res.render('shop/index',
    {title: 'Shopping',
     products: products,
     path : '/'
     })
};


exports.getProducts = (req,res,next)=>{
    const products = Product.getAll();
    res.render('shop/products',
    {title: 'Products',
     products: products,
     path : '/products'
     })
};

exports.getProduct = (req,res,next)=>{
   
    const product = Product.getById( req.params.productid);
    res.render("shop/product-detail",{
    title:product.name,
    product: product,
    path:'/products'
   })
};


exports.getProductsDetails = (req,res,next)=>{
    const products = Product.getAll();
    res.render('shop/details',
    {title: 'Details',
     products: products,
     path : '/details'
     })
};

exports.getProductsCarts = (req,res,next)=>{
    const products = Product.getAll();
    res.render('shop/cart',
    {title: 'Cart',
     products: products,
     path : '/cart'
     })
};

exports.getProductsOrders = (req,res,next)=>{
    const products = Product.getAll();
    res.render('shop/orders',
    {title: 'Orders',
     products: products,
     path : '/orders'
     })
};

