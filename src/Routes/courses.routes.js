const {Router } = require("express");
const { getAllCourses, getAllInfCourses, createCourse, updateCourse, createVideo, deleteVideo  } = require("../Controllers");

const router = Router();

router.get("/courses", getAllCourses);
router.get("/courses/allinf", getAllInfCourses);
router.post("/courses/new", createCourse);
router.post("/courses/newvideo", createVideo);
router.post("/courses/deletevideo/:id", deleteVideo)
router.put("/courses/:id", updateCourse);

module.exports = router;