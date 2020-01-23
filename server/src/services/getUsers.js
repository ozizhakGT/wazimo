const axios = require('axios');

// service handle get user request.
const getUser = async (limit=10) => {
    const results = await axios.get('https://storage.googleapis.com/static.aoni.io/demo/user.json');
        const chunk = results.data.filter((user, i) => i < limit);
    return chunk;
};

module.exports = getUser;