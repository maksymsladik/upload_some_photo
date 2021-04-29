const { Photos } = require("../models/index");

const getPhotos = async function (req, res) {
  try {
    const data = await Photos.findAll();

    res.json({
      status: true,
      message: "Вы успешно получили фото",
      data,
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const createPhotos = async function (req, res) {
  try {
    await Photos.create({ photo: req.body.photos });

    res.json({
      status: true,
      message: "Вы успешно обновили фото",
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

const deletePhoto = async function (req, res) {
  try {
    await Photos.destroy({ where: { id: req.params.id } });

    res.json({
      status: true,
      message: "Вы успешно удалили фото",
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

module.exports = {
  getPhotos,
  createPhotos,
  deletePhoto,
};
