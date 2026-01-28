import multer from "multer";

//diskstorage use
const storage = multer.diskStorage({
  destination: function (req, file, cb) {//cb is call back
    cb(null,"./public/temp")
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.originalname)
  }
})
export const upload = multer({
  storage,
})