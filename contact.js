const nodemailer = require('nodemailer');

export const userFindPass = async (req,res) => {
    
    const name = req.query.name
    const email = req.query.email
    const message = req.query.message
    
    try{
     
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: 'ekitdevteam@gmail.com',
          pass: 'stkozizltciypzyg',
        },
      });
         // send mail with defined transport object
      let info = await transporter.sendMail({
        from: 'Team EKIT',
        to: 'dmsrud1501222@naver.com',
        subject: 'From Portpolio Site',
        text: `발신자 이름 : ${name} / 발신자 이메일 : ${email} 발신내용 : ${message}`
        
      });
    
      
      
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      
      
    }catch(err){
      res.send(err)
    }
    
  };

export const home = (req,res) => {
    res.send()
}