const orders=[
    {
        date:'2009-05-05',
        subtotal:90.3,
        items:[
            {


            product:{
                  id: 'redshoe',
                  description: 'Old Red Shoe',
                  price:33.3,

            },
            quantity:2,
        }

        ]
    }
]
function getAllorders(){
    return orders
}
module.exports={
    getAllorders,
}


      