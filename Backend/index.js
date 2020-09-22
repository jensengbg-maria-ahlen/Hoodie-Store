const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

//Routes
const productsRoute = require('./routes/products');
const ordersRoute = require('./routes/orders');

//Request
app.use('/products', productsRoute);
app.use('/orders', ordersRoute);

//Static assets
app.use('/assets', express.static('./assets'));


const port = 8000;
app.listen(port, () => {
    console.log('Server is running on port ' + port);
});