'use strict';

module.exports.viewMsg = async ( event, context ) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "You are viewing the message",
      input: event })
  };
};
