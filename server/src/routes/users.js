const express = require('express');
const router = express.Router();
const getUsers = require('../services/getUsers');


// Users route
router.get('/', async ({query}, res) => {
    try {

        const response = await getUsers(parseInt(query.limit));
        res.status(200);
        res.send(response);
    } catch (e) {
        res.status(500);
        res.send('Internal Server Error');
    }
});

module.exports = router;