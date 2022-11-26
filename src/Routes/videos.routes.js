const {Router } = require("express");
const { createVideo, deleteVideo  } = require("../Controllers");

const router = Router();

router.post("/video/newvideo", createVideo);
router.post("/video/deletevideo/:id", deleteVideo);

module.exports = router;