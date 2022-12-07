const accountSid = "AC62ded13896f2e96cecbf16077af109ea";
const authToken = "5400434e4fe87653311d70e660333607";
const client = require("twilio")(accountSid, authToken);
require("dotenv").config({ path: "./config/.env" });

const message = ('its working')

module.exports = {
  createText: async (req, res) => {
    client.messages 
      .create({         
            body: `'${message}'`, from: '+13466332747', to: '+16174078920' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();
      res.redirect("/post/"+req.params.id);},
      
      
};


