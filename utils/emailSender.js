const nodemailer = require("nodemailer");

exports.senderMailVerification = (email, password, url) => {
    let transporter = nodemailer.createTransport({
        service:"gmail",
        auth: {
          user: process.env.EMAIL, 
          pass: mwtdtxclkzmlaluo, 
        },
      });

    let info = {
        from: process.env.EMAIL, // sender address
        to: email, // list of receivers
        subject: "Orebi Ecommerce Verification Link", // Subject line
        text: "Hello world?", // plain text body
        html: `<b>${url}</b>`, // html body
      };
    
      transporter.sendMail(info, (err, res)=>{
        if(err) return err;
        return res;
      })

}