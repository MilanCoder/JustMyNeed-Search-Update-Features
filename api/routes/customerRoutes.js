const express = require('express');
const customerroutes = express.Router();
const orderCrud= require('../../db/crudOperations/orderCrud')
customerroutes.post('/order',(req,res)=>{
if(req.body.order!=null){

    let order=req.body.order;
    orderCrud.addOrder(order,res);
}else 
{
    res.status(409).json('Null Data');
}
   
    
})