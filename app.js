const exprress = require('express');
const fs = require('fs')
const app = exprress();
const bodyParser = require('body-parser')

const path = require('path')

const adminRoute = require("./routes/admin");
const userRoute = require("./routes/shop");
const errorController = require("./controllers/error")

const { title } = require('process');

app.set('view engine','pug');
app.set('views','./views');

app.use(bodyParser.urlencoded({extended : false}));

app.use(exprress.static(path.join(__dirname,'public')));

app.use('/admin',adminRoute);

app.use(userRoute);

app.use(errorController.get404);

app.listen(3000,()=>{
    console.log("Listening 3000 port");
});