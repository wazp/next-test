/* eslint-disable no-undef */
const contentful = require('contentful');

const defaultConfig = {
  CTF_SPACE_ID: process.env.CTF_SPACE_ID,
  CTF_CDA_TOKEN: process.env.CTF_CDA_TOKEN
};

module.exports = {
  createClient (config = defaultConfig) {
    const options = {
      host: 'cdn.contentful.com',
      space: config.CTF_SPACE_ID,
      accessToken: config.CTF_CDA_TOKEN
    };

    return contentful.createClient(options);
  }
};
