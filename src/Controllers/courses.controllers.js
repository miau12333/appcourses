const { CoursesServices } = require("../Services");

const getAllCourses= async(req, res, next) => {
    try {
        const result = await CoursesServices.getAll();
        res.json(result);
        
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Course not find"
        })
    }
};

const getAllInfCourses = async(req, res, next) => {
    try {
        const result = await CoursesServices.getInf();
        if (result) {
            res.json(result);
        } else {
            next({
                status: 400,
                errorContent: "",
                message: "All Inf Courses not find"
            });
            
        }
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Inf Courses not find"
        });
    }
};

const createCourse = async(req, res, next) => {
    try {
        const newCourse = req.body;
        const result = await CoursesServices.create(newCourse);
        res.status(201).json(result);
    } catch (error) {
        next({
            status: 418,
            errorContent: error,
            message: "No cumples todos los campos",
          });
    }
    
}

module.exports = {
    getAllCourses,
    getAllInfCourses,
    createCourse,
}