const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const members = require('./Members');
const SSLCommerzPayment = require('sslcommerz');
const fetch = require('node-fetch');
const app = express();




// init middleware
// app.use(logger);

// handlebars middleware
// app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');

// body parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 

// homepage route
// app.get('/', (req, res) => res.render('index', {
//     title: 'Member app',
//     members : members
// }));

// set a static folder
app.use(express.static(path.join(__dirname, 'public')));


// step 1: create and get session when the payment button clicke
app.post('/api/ssl_Parameters', (req, res) => {
    let customerName = req.body.customerName;
    let amount = req.body.amount;
    console.log(req.body.amount);
    let promise = new SSLCommerzPayment({
        store_id: 'edute5dc3bb6eb7e6e',
        store_passwd: 'edute5dc3bb6eb7e6e@ssl',
        total_amount: amount,
        currency: 'BDT',
        tran_id: 'REF123',
        ipn_url : 'http://localhost:5000/api/success',
        success_url: 'http://localhost:5000/api/success',
        fail_url: 'http://localhost:5000/api/fail.html',
        cancel_url: 'http://localhost:5000/api/cancel.html',
        shipping_method:'Courier',
        product_name:'Computer.',
        product_category:'Electronic',
        product_profile:'general',
        cus_name: customerName,
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
    promise.then((value) => {
        // console.log(value);
        res.json(value);
    });
});

app.post('/api/success', (req, res) => {
    console.log('Body request--', req.body);

    let tran_id =req.body.tran_id;
    let val_id =req.body.val_id;
    let amount =req.body.amount;
    let card_type =req.body.card_type;
    let store_amount =req.body.store_amount;
    let card_no =req.body.card_no;
    let bank_tran_id =req.body.bank_tran_id;
    let status =req.body.status;
    let tran_date =req.body.tran_date;
    let error =req.body.error;
    let currency =req.body.currency;
    let card_issuer =req.body.card_issuer;
    let card_brand =req.body.card_brand;
    let card_sub_brand =req.body.card_sub_brand;
    let card_issuer_country =req.body.card_issuer_country;
    let card_issuer_country_code =req.body.card_issuer_country_code;
    let store_id =req.body.store_id;
    let verify_sign =req.body.verify_sign;
    let verify_key =req.body.verify_key;
    let verify_sign_sha2 =req.body.verify_sign_sha2;
    let currency_type =req.body.currency_type;
    let currency_amount =req.body.currency_amount;
    let currency_rate =req.body.currency_rate;
    let base_fair =req.body.base_fair;
    let avalue_a =req.body.value_a;
    let value_b =req.body.value_b;
    let value_c =req.body.value_c;
    let value_d =req.body.value_d;
    let risk_level =req.body.risk_level;
    let risk_title =req.body.risk_title;
    
    // let store_id = 'edute5dc3bb6eb7e6e'
    let store_passwd ='edute5dc3bb6eb7e6e@ssl';
    fetch(`https://sandbox.sslcommerz.com/validator/api/validationserverAPI.php?val_id=${val_id}&store_id=${store_id}&store_passwd=${store_passwd}&format=json`,{
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        // body: this.data, // body data type must match "Content-Type" header
        })
        .then(response=> response.json()).then(value => {
            // console.log(value);
           res.json(value)
        });
    
    // res.send(`<h1> valid: ${val_id} -- storeid: ${store_id} </h1>`);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));