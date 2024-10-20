const products=[
    {
        id: 'redshoe',
    description:'Red Shoe',
  price:42.5,
  reviews:[],

},
{

id:'bluejean',
description:'Blue Jeans',
price:55.0,
reviews: [],
}
];
function getAllproducts(){
        return products;
}
function getproductsByPrice(min,max) {
      return products.filter((product)=>{
        return product.price>= min && product.price<=max;
      })
}
function getproductsById(id){
    return products.find((product)=>{
        return product.id===id;
    })
}


function addNewProduct(id,description,price){
    const newProduct ={
        id,
        description,
        price,
        reviews: []
    }
    
    products.push(newProduct);
    return newProduct;
}

function addNewProductReview(id,rating,comment){
              const matchedProduct=getproductsById(id);
              if(matchedProduct){
                const newProductReview = {
                    rating,
                    comment
                }
                matchedProduct.reviews.push(newProductReview)
                return newProductReview;
              }
}




module.exports={
    getAllproducts,
    getproductsByPrice,
    getproductsById,
    addNewProduct,
    addNewProductReview

}