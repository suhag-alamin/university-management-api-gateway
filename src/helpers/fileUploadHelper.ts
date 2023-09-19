import { UploadApiResponse, v2 as cloudinary } from 'cloudinary';
import * as fs from 'fs';
import multer from 'multer';
import { IUploadFile } from '../interfaces/file';

cloudinary.config({
  cloud_name: 'dkw1ovah4',
  api_key: '115321516896786',
  api_secret: '9NmG3u4OM_-WebDUMEsFFQ4-YdU'
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({
  storage: storage
});

const uploadToCloudinary = async (file: IUploadFile): Promise<UploadApiResponse | undefined> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      file.path,
      { public_id: file.originalname, folder: 'university-management' },
      (error, result) => {
        fs.unlinkSync(file.path);
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
  });
};

export const FileUploadHelper = {
  uploadToCloudinary,
  upload
};
