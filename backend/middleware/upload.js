// middleware to handle image files
import { extname } from 'path'
import multer, { diskStorage } from 'multer'

var storage = diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    let ext = extname(file.originalname)
    cb(null, Date.now() + ext)
  },
})

var upload = multer({
  storage: storage,
  fileFilter: function (req, file, callback) {
    if (
      file.mimetype == 'image/png' ||
      file.mimetype == 'image/jpg' ||
      file.mimetype == 'image/jpeg'
    ) {
      callback(null, true)
    } else {
      console.log('only jpg & png file supported')
      callback(null, false)
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 2,
  },
})

export default upload
