const { getUserById, createUser, updateUser, getUsersCourses, addCourseToUser } = require('./users.controllers');
const { getAllCourses, getAllInfCourses, createCourse } = require('./courses.controllers');

module.exports = {
    getUserById,
    createUser,
    updateUser,
    getUsersCourses,
    addCourseToUser,
    getAllCourses,
    getAllInfCourses,
    createCourse,
}