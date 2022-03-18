const { additionalHeaders } = require('./terraform/add-headers-to-requests');

module.exports = {
  devServer: {
    headers: additionalHeaders,
  },
};
