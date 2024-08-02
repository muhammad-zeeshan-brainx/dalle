const { imageGeneratorService } = require('./../services');

const generateImage = async (req, res) => {
  try {
    console.log('genrate image..', req.body);
    const { promt } = req.body;
    if (!promt) {
      return res.status(422).json({ error: 'please provide promt' });
    }
    const image = await imageGeneratorService.generateImage({
      model: 'dall-e-2',
      prompt: promt,
      n: 1,
      size: '512x512',
      response_format: 'b64_json',
    });
    // await new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve();
    //   }, 3000);
    // });
    console.log('genration complete..');
    res.status(200).json({
      image: image,
      message: 'image generated successfully',
    });
  } catch (error) {
    console.log('error->>', error);
    res.status(500).json({ error: 'something went wrong' });
  }
};

module.exports = {
  generateImage,
};
