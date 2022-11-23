const { Router } = require("express");
const { getUserById, getUsersCourses, createUser, updateUser, addCourseToUser } = require("../Controllers");
const router = Router();

router.get("/users/:id", getUserById);
router.get("/users/:id/courses", getUsersCourses);

router.post("/users/new", createUser);
router.post("/users/:id/addcourse/:idcourse", addCourseToUser);
router.put("/users/:id", updateUser);

module.exports = router;