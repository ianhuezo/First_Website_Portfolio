const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;
const server = require('https').createServer(app);
const io = require('socket.io')(server);
const nodemailer = require('nodemailer');


server.listen(PORT);


app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

io.on('connection', function(socket){
  socket.on('user-info', function (data) {
    //console.log(data.name, data.email, data.subject, data.content);//name email subject and content of email

    var transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // use SSL
      auth: {
          user: 'process.env.USER',//change to process.env.USER
          pass: 'process.env.PASS'//CHANGE IT TO process.env.PASS
      }
    });
    var mailOptions = {
      from: data.email,
      to: 'process.env.USER',
      subject: "Client Mail Website",//data.subject
      html: '<h2><b>'+data.name + '--->' + data.email + '</b></h2><br></br><h3>' + data.subject + '</h3><br></br><p>' + data.content + '</p>',
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  });
})
