'use strict';
module.exports.mkMsg = async ( event, context ) => {
  var theMsg = typeof event.queryStringParameters !== 'undefined' ? event.queryStringParameters.set : 'This is the default msg';
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: theMsg,
      input: event })
  };
};
