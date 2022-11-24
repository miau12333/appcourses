const { getUserById, createUser, updateUser, getUsersCourses, addCourseToUser } = require('./users.controllers');
const { getAllCourses, getAllInfCourses, createCourse, updateCourse, createVideo} = require('./courses.controllers');

module.exports = {
    getUserById,
    createUser,
    updateUser,
    getUsersCourses,
    addCourseToUser,
    getAllCourses,
    getAllInfCourses,
    createCourse,
    updateCourse,
    createVideo
}