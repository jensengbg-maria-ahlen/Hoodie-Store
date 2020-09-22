const { Router } = require('express');
const router = new Router();

router.post('/', (req, res) => {
    console.log(req.body)
    res.send({msg: 'Your order is beeing prepared.', orderNr: '12345789876543'});
});

module.exports = router;