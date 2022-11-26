const { Videos } = require("../models");

class VideosServices{
static async createVid(newVideo) {
    try {
        const result = await Videos.create(newVideo);
        return result;
    } catch (error) {
        throw error;
    }
};

static async deleteVideo(id)
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
}; 
}

module.exports = VideosServices;