const keys = require('../config/keys');
var EasyYandexS3 = require("easy-yandex-s3");

exports.s3Upload = async image => {
  try {
    let imageUrl = '';
    let imageKey = '';

    if (!keys.aws.accessKeyId) {
      console.warn('Missing aws keys');
    }

    if (image) {
      const s3bucket = new EasyYandexS3({
        auth: {
          accessKeyId: keys.aws.accessKeyId,
          secretAccessKey: keys.aws.secretAccessKey,
        },
        Bucket: 'bip-bucket', 
        debug: false,
      });

      const upload = await s3bucket.Upload(
        {
          buffer: image.buffer,
        },
        '/images/'
      );
      console.warn(upload); 
      imageUrl = upload.Location;
      imageKey = upload.key;
    }

    return { imageUrl, imageKey };
  } catch (error) {
    return { imageUrl: '', imageKey: '' };
  }
};
