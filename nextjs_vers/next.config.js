require('dotenv').config()

module.exports = {
  target: 'serverless',
  env: {
    STORYBLOK_API_KEY: process.env.STORYBLOK_API_KEY
  }
};