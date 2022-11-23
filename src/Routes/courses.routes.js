const {Router } = require("express");
const { getAllCourses, getAllInfCourses, createCourse} = require("../Controllers");
const router = Router();

router.get("/courses", getAllCourses);
router.get("/courses/allinf", getAllInfCourses);
router.post("/courses/new", createCourse);


module.exports = router