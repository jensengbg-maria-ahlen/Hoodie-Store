const { Router } = require('express');
const router = new Router();
const { db } = require('./../database');

router.get('/', (req, res) => {
    let products = db.get('products').value()
    res.send({products: products});
});

module.exports = router;