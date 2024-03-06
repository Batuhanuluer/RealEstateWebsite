
const product = [
    {id:"13213",name:'House',price:'2000',imageURL:'1,.jpg',description:'Nice House'},
    {id:"13214",name:'House',price:'3000',imageURL:'1,.jpg',description:'Nice House'},
    {id:"13215",name:'House',price:'4000',imageURL:'1,.jpg',description:'Nice House'},
    {id:"13216",name:'House',price:'5000',imageURL:'1,.jpg',description:'Nice House'}
];

module.exports = class Product{
    
    constructor(name,price,imageURL,description){
        this.id = Math.floor(Math.random()*99999)+1;
        this.name = name;
        this.price = price;
        this.imageURL = imageURL;
        this.description = description;
    }

    savePRoduct(){
        product.push(this);
    }

    static getAll(){
        return product;
    }
    static getById(id){
        const products = product.find(i=>i.id===id);
        return products;
    }
}



