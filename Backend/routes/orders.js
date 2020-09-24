const { v4: uuidv4 } = require('uuid');
const { Router } = require('express');
const router = new Router();
const { db } = require('./../database');

router.post('/', (req, res) => {
    let order = {
        orderNr: uuidv4(),
        timeStamp: Date.now(),
        items: req.body.items,
        totalOrderValue: req.body.totalOrderValue
    }

    db.get('orders').push(order).write()

    res.send({ msg: 'Thank you for your order!', orderNr: order.orderNr })

});

module.exports = router;