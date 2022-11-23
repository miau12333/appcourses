const { UsersServices } = require("../Services");

const getUserById = async(req, res, next)=>{
    try{
           const {id} = req.params;
           const result = await UsersServices.getById(id);
           if(result){
               res.json(result);
           }
           else{
               next({
                   status:400,
                   errorContent: "",
                   message: 'User not find else'   
                  });
           }
                       
    } catch(error){
        console.log("entrando al geUserById");
       next({
        status:400,
        errorContent: error,
        message: 'User not find'   
       });
    }
};

const createUser = async (req, res, next) => {
    try {
      const newUser = req.body;
      console.log(newUser);
      const result = await UsersServices.create(newUser);
      res.status(201).json(result);
    } catch (error) {
      next({
        status: 418,
        errorContent: error,
        message: "No cumples todos los campos",
      });
    }
};

const updateUser = async (req, res, next) => {
    try {
      const { id } = req.params;
      const dataUpdate = req.body;
      const result = await UsersServices.update(dataUpdate, id);
      res.json(result);
    } catch (error) {
        next({
            status: 418,
            errorContent: error,
            message: "No cumples todos los campos",
        });
    }
};

const getUsersCourses = async (req, res, next) => {
    try{
        const {id} = req.params;
        const result = await UsersServices.getCourses(id);
        if(result){
            res.json(result);
        }
        else{
            next({
                status:400,
                errorContent: "",
                message: 'User not find else'   
               });
        }          
 } catch(error){
     console.log("entrando al geUserById");
    next({
     status:400,
     errorContent: error,
     message: 'User not find'   
    });
 }
};

const addCourseToUser = async (req, res, next) => {
    try {
        const {id, idcourse} = req.params;
      const newUser = req.body;
      console.log(newUser);
      const result = await UsersServices.addCourse(id, idcourse);
      res.status(201).json(result);
    } catch (error) {
      next({
        status: 400,
        errorContent: error,
        message: "No cumples todos los campos",
      });
    }
};

module.exports = {
    getUserById,
    createUser,
    updateUser,
    getUsersCourses,
    addCourseToUser,
};