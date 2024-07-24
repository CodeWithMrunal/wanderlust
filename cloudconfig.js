const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

//to connect to out cloudinary service
cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET
})

//now we have cloud service but we also need to store our files somewhere in the cloud, i.e given below
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'wanderlust_dev',
      allowedFormats: ['png','jpg','jpeg'], // supports promises as well
    },
  });

  module.exports={
    cloudinary,storage
  }