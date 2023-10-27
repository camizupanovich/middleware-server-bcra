const { BEARER_TOKEN } = process.env;

function addBearerToken() {
    return { headers: { Authorization: `Bearer ${BEARER_TOKEN}` } }
}

module.exports = addBearerToken();