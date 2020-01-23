const express = require('express');
const port = process.env.PORT || 5012;
const app = express();

require('./startup/cors')(app);
require('./startup/routes')(app);




const server = app.listen(port, () => {
    if (port === 5012) {
        console.log('listening in port ' + port);
    }
});

module.exports = server;