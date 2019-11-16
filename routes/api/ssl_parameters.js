// const express = require('express');
// const uuid = require('uuid');
// const SSLCommerzPayment = require('sslcommerz');
// const router = express.Router();


// router.post('/', (req, res) => {
//     // console.log(req.headers);
//     let customerName = req.body.customerName;
//     let amount = req.body.amount;
//     console.log(req.body.amount);
//     let promise = new SSLCommerzPayment({
//         store_id: 'edute5dc3bb6eb7e6e',
//         store_passwd: 'edute5dc3bb6eb7e6e@ssl',
//         total_amount: amount,
//         currency: 'BDT',
//         tran_id: 'REF123',
//         success_url: 'http://localhost:5000/api/success',
//         fail_url: 'http://localhost:5000/api/fail.html',
//         cancel_url: 'http://localhost:5000/api/cancel.html',
//         shipping_method:'Courier',
//         product_name:'Computer.',
//         product_category:'Electronic',
//         product_profile:'general',
//         cus_name: customerName,
//         cus_email: 'cust@yahoo.com',
//         cus_add1: 'Dhaka',
//         cus_add2: 'Dhaka',
//         cus_city: 'Dhaka',
//         cus_state: 'Dhaka',
//         cus_postcode: '1000',
//         cus_country: 'Bangladesh',
//         cus_phone: '01711111111',
//         cus_fax: '01711111111',
//         ship_name: 'Customer Name',
//         ship_add1: 'Dhaka',
//         ship_add2: 'Dhaka',
//         ship_city: 'Dhaka',
//         ship_state: 'Dhaka',
//         ship_postcode: 1000,
//         ship_country: 'Bangladesh',
//         multi_card_name: 'mastercard',
//         value_a: 'ref001_A',
//         value_b: 'ref002_B',
//         value_c: 'ref003_C',
//         value_d: 'ref004_D'
//     }, false);
//     promise.then((value) => {
//         res.json(value);
//     });
// });


// module.exports = router;