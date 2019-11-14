const express = require('express');
const router = express.Router();
const path = require('path');
const fetch = require('node-fetch');

router.post('/', (req, res) => {
   
    let json = {
        name: 'Towhid',
        email: 'towhid@gmail.com'
    }

    
    fetch(`https://sandbox.sslcommerz.com/validator/api/validationserverAPI.php?val_id=1709162025351ElIuHtUtFReBwE&store_id=edute5dc3bb6eb7e6e&store_passwd=edute5dc3bb6eb7e6e@ssl&format=json`,{
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        // body: this.data, // body data type must match "Content-Type" header
        })
        .then(response=> response.json()).then(value => {
            console.log(value);
            res.json(value);
        });
    });


module.exports = router;