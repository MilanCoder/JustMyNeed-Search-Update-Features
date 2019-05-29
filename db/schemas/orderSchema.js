const mongoose = require('mongoose');

const OrderedProducts= new mongoose.Schema({
    subproductId:String,
    subproductName:String,
    amount:Number,
    suffix:String,
    quantity:Number,
    subTotal:Number
})
const OrderSchema= new mongoose.Schema({
    delieveryId:String,
    allocatedEmpId:String,
    orderId:String,
    date:String,
   timeSlot:String,
   delieveryAddress:String,
   pincode:String,
    transactionId:String,
    status:String,
    payment:Number,
    customerId:String,
paymentMethod:String,
 orderedProducts:[
    OrderedProducts
 ]

})

module.exports={
    OrderSchema: mongoose.model("orders",OrderSchema),
    OrderedProducts:mongoose.model("orderedProducts",OrderedProducts)
}