const { Users, Categories, Instructors, Courses, Videos, UsersCourses } = require("./index");
const initModels = () => {
   Instructors.belongsTo(Users);
   Users.hasOne(Instructors);
   
   
   Courses.belongsTo(Instructors);
   Instructors.hasMany(Courses);
   
   Courses.belongsTo(Categories, {as: 'course', foreignKey:'category_id'});
   Categories.hasMany(Courses, {as: 'catcourse', foreignKey:'category_id'});
   
   Videos.belongsTo(Courses, {as: 'VideoCourse', foreignKey:'course_id'});
   Courses.hasMany(Videos, {as:'coursevid', foreignKey:'course_id'});

   UsersCourses.belongsTo(Courses, {as: 'inscriptions', foreignKey:'course_id'});
   Courses.hasMany(UsersCourses, {foreignKey: 'course_id'});
 


   UsersCourses.belongsTo(Users, {as: 'students', foreignKey:'user_id'});
   Users.hasMany(UsersCourses, {as: 'registers',foreignKey: 'user_id'});

}

module.exports = initModels;