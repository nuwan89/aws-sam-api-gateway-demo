
const axios = require('axios')
const url = 'http://checkip.amazonaws.com/';
let response;


exports.lambda_handler = async (event, context, callback) => {
    try {
        const ret = await axios(url);
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'You are from:',
                location: ret.data.trim()
            })
        }
    }
    catch (err) {
        console.log(err);
        callback(err, null);
    }

    callback(null, response)
};
