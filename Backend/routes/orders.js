const { v4: uuidv4 } = require('uuid');
const { Router } = require('express');
const router = new Router();
const { db } = require('./../database');

router.post('/', (req, res) => {
    let order = {
        orderNr: uuidv4(),
        timeStamp: Date.now(),
        items: req.body.items,
        totalOrderVlaue: req.body.items.reduce((acc, item) => acc + item.price, 0)
    }

    db.get('orders').push(order).write()

    res.send({ msg: 'Thank you for your order!', orderNr: order.orderNr })

});

module.exports = router;