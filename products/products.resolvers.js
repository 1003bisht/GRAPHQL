const productsModel=require('./products.models');


module.exports={
    Query:{
        products: ()=>{
            return productsModel.getAllproducts();

        },
        productsByPrice: (__,args) => {
              return productsModel.getproductsByPrice(args.min, args.max)
        },
        product: (__,args)=>{
            return productsModel.getproductsById(args.id)

        }
    },
    Mutation: {
        addNewProduct: (__,args) =>{
            return productsModel.addNewProduct(args.id, args.description, args.price);

        },
        addNewProductReview: (__,args)=>{
            return productsModel.addNewProductReview(args.id, args.rating, args.comment);
        }
    }
}