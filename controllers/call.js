// const cloudinary = require("../middleware/cloudinary");
// const Messages = require("../models/Messages");
const accountSid = "AC62ded13896f2e96cecbf16077af109ea";
const authToken = "abfa53db02dc4b43096e79414f2f290c";
const client = require("twilio")(accountSid, authToken);
// const message = require("../models/Comment");
// const schedule = require("node-schedule");

// module.exports = {
//   createText: async (req, res) => {
//     schedule.scheduleJob("31 16 1 12 *", () => {
//       client.messages
//         .create({
//           body: "Thank you for your visit!",
//           from: "+13466332747",
//           to: "+16174078920",
//         })
//         .then((message) => console.log(message.sid))

//         .done();
//       res.redirect("/profile");
//     });
//   },
// };

module.exports = {


  createCall: async (req, res) => {
    client.calls
      .create({
         url: 'http://demo.twilio.com/docs/voice.xml',
         to: '+17816914251',
         from: '+13466332747'
       })
      .then(message => console.log(message.sid)) 
      .done();
      res.redirect("/post/"+req.params.id);},
      
      
};
