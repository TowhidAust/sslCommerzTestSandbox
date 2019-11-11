const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const members = require('./Members');

const app = express();




// init middleware
// app.use(logger);

// handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

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

// members api route
app.use('/api/members', require('./routes/api/members'));
app.use('/api/ssl_Parameters', require('./routes/api/ssl_parameters'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));