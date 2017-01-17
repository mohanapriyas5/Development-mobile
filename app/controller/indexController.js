// const qrCode = require('qrcode');



var qrImage =require('qr-image');
var fs=require('fs');
var express=require('express');
var date=new Date();



module.exports.createImage = function (req, res) {
    console.log('creatimafe');
    res.render('index', { title: 'Express' });
};

module.exports.createImage1 = function (req, res) {

var movies = ["Reservoir Dogs", "Pulp Fiction", "Jackie Brown", 
"Kill Bill", "Death Proof", "Inglourious Basterds"];
 

/*
$.getJSON('./people.json', function (json) {
var array = [];
for (var key in json) {
    if (json.hasOwnProperty(key)) {
        var item = json[key];
        array.push({
            name: item.Name,
            surname: item.Surname,
            mobile: item.mobile,
            email: item.email
        });            
    }
}
});*/
movies.forEach(function(value,key)
  {
     console.log(value);
      qrImage
       .image(value,{type:'png',size:20})
       .pipe(fs.createWriteStream("app/images/" + key + ".png"))

});
   /* var code = qrImage.image("text to show in qr", { type: 'png', ec_level: 'H', size: 10, margin: 0 });
    fs.readFile('./people.json', 'utf8', function (err,data) {
    for(var item of data) {
     console.log('item: ', [item.firstname]);
  }
});*/
  //   res.setHeader('Content-type', 'image/png');
 //    code.pipe(createWriteStream("MyQR.png")));

//     code.pipe(res);


   /* fs.readFile('D:/Mohanapriya/EasyGo/Tulips.jpg', function (err, data) {
    if (err) throw err;
    qrImage
       .image("http://www.nodejs.org",{type:'png',size:20})
       .pipe(fs.createWriteStream("MyQR.png"))
     res.write(data);
    });*/


  //  res.render('index', { title: 'QR Page', qr: code });
};



/*var http = require('http'), fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'image/jpg'});

fs.readFile('D:/Mohanapriya/EasyGo/Tulips.jpg', function (err, data) {
  if (err) throw err;
  res.write(data);


});

res.end();
//fs.close();
}).listen(3050);
console.log("fd");
*/



/*var app=express();
app.get('/',function(req,res)
{
	var code=qrImage.image(date.toString(), {type:'png'});
	res.end("Hi");
	code.pipe(res);
});

app.listen(3500);
qrImage
       .image("http://www.nodejs.org",{type:'png',size:20})
       .pipe(fs.createWriteStream("MyQR.png"));*/