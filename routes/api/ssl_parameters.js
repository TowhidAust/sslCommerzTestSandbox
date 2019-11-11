const express = require('express');
const uuid = require('uuid');
const router = express.Router();
// const sslTestParameters = require('../../Parameters');
const SSLCommerzPayment = require('sslcommerz');

let sslTestParameters = new SSLCommerzPayment({
    store_id: 'edute5dc3bb6eb7e6e',
    store_passwd: 'edute5dc3bb6eb7e6e@ssl',
    total_amount: 100,
    currency: 'EUR',
    tran_id: 'REF123',
    success_url: 'http://yoursite.com/success.php',
    fail_url: 'http://yoursite.com/fail.php',
    cancel_url: 'http://yoursite.com/cancel.php',
    shipping_method:'Courier',
    product_name:'Computer.',
    product_category:'Electronic',
    product_profile:'general',
    cus_name: 'Customer Name',
    cus_email: 'cust@yahoo.com',
    cus_add1: 'Dhaka',
    cus_add2: 'Dhaka',
    cus_city: 'Dhaka',
    cus_state: 'Dhaka',
    cus_postcode: '1000',
    cus_country: 'Bangladesh',
    cus_phone: '01711111111',
    cus_fax: '01711111111',
    ship_name: 'Customer Name',
    ship_add1: 'Dhaka',
    ship_add2: 'Dhaka',
    ship_city: 'Dhaka',
    ship_state: 'Dhaka',
    ship_postcode: 1000,
    ship_country: 'Bangladesh',
    multi_card_name: 'mastercard',
    value_a: 'ref001_A',
    value_b: 'ref002_B',
    value_c: 'ref003_C',
    value_d: 'ref004_D'
}, false);



// create a member
router.post('/', (req, res) => {
    res.send(req.body);
    console.log(JSON.stringify(sslTestParameters));
    // const new_sslTestParameters = {
    //     id: uuid.v4(),
    //     name: req.body.name,
    //     email: req.body.email,
    //     status: 'active'
    // }

    // // check 
    // if (!newMember.name || !newMember.email) {
    //    return res.status(400).json({ msg: 'please include a name and email' });
    // }

    // members.push(newMember);
    // res.json(members);
    // res.redirect('/');
});

module.exports = router;