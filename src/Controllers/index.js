const { getUserById, createUser, updateUser, getUsersCourses, addCourseToUser } = require('./users.controllers');
const { getAllCourses, getAllInfCourses, createCourse, updateCourse, createVideo, deleteVideo} = require('./courses.controllers');
const { createCat, deleteCategories } = require('./categories.controllers');

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
    createVideo,
    createCat,
    deleteCategories,
    deleteVideo,
}