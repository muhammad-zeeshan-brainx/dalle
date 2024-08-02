const axios = require('axios');
const { openai } = require('./../config/openAi');

const generateImage = async (data) => {
  const response = await openai.images.generate(data);
  image_url = response.data[0].b64_json;
  return image_url;
};

module.exports = {
  generateImage,
};
