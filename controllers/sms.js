const accountSid = "AC62ded13896f2e96cecbf16077af109ea";
const authToken = "abfa53db02dc4b43096e79414f2f290c";
const client = require("twilio")(accountSid, authToken);
require("dotenv").config({ path: "./config/.env" });

const message = ('its working')

module.exports = {
  createText: async (req, res) => {
    client.messages 
      .create({         
            body: `'${message}'`, from: '+13466332747', to: '+17816914251' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();
      res.redirect("/post/"+req.params.id);},
      
      
};


