// const cloudinary = require("../middleware/cloudinary");
const Med = require("../models/med");



module.exports = {

  createMed: async (req, res) => {
  
    try {     
      await Med.create({
        med: req.body.med,
        when: req.body.when,
        post: req.params.id
      });
      console.log("med has been added!");
      console.log(req.body.med);
      console.log(req.body.when);
      res.redirect("/post/"+req.params.id);
    } catch (err) {
      console.log(err);
      
    }
  }
};
