const { Router } = require("express");
const router = Router();
const {
  getPhotos,
  createPhotos,
  deletePhoto,
} = require("../controllers/photoController");

router.get("/photos", getPhotos);
router.post("/photos", createPhotos);
router.delete("/photos/:id", deletePhoto);

module.exports = router;
