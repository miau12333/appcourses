const {Categories} = require("../models");

class CategoriesServices {
    static async createCat(newCat) {
        try {
            const result = await Categories.create(newCat);
            return result;
        } catch (error) {
            throw error;
        }
    };
    static async delete(id)
    {
       try{
             const result =  await Categories.destroy({
                    where: { id }
             });
             return result;

       }catch(error)
       {
         throw error;
       }
    }
};

module.exports = CategoriesServices;