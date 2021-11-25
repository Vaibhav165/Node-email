var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vaibhavbansal729@gmail.com',
    pass: '******'
  }
});

var mailOptions = {
  from: 'vaibhavbansal729@gmail.com',
  to: 'vaibhav2552001@gmail.com',
  subject: 'Sending Email using Node.js',
  text: `Hi sending first email`
  // html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'        
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
