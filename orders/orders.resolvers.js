const ordersModels=require('./orders.models');

module.exports={
    Query:{
        orders: ()=>{
            return ordersModels.getAllorders();
            
        }
    }
}
