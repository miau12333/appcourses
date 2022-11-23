const { Courses, Categories, Videos } = require("../models");

class CoursesServices{
    static async getAll() {
        try { 
            const result = await Courses.findAll({
                attributes: ["id", "title","description"]
            });
            return result;
        } catch (error) {
            throw error;
        }
    };
    static async getInf(){
        try {
            const result = await Courses.findAll({
                attributes: ["title","description"],
                include: {
                    model: Categories,
                    as: "course",
                    attributes: ["name"],
                },
                include: {
                    model: Videos,
                    as: "coursevid",
                    attributes: ["title", "url"]
                }
            });
            return result;
        } catch (error) {
            throw error;
        }
    };
    static async create(newCourse){
        try {
            const result = await Courses.create(newCourse);
            return result;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = CoursesServices;