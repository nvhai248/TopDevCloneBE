const streamifier = require('streamifier');
const cloudianry = require('../configs/cloudinary');

const uploader = async (file) => {
    return new Promise((resolve, reject) => {
        let stream = cloudianry.uploader.upload_stream((error, result) => {
            if (result) {
                resolve(result);
            } else {
                reject(error);
            }
        });
        streamifier.createReadStream(file.buffer).pipe(stream);
    });
};

module.exports = uploader;
