module.exports.get404 = (req,res)=>{
    res.status(404).render('error/404', {title: '404 Not Found'});
}