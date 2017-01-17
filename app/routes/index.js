var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/create', (req, res) => {
	console.log('show controller');
	controller.createImage(req, res);
});


router.get('/create1', function(req, res) => {


	console.log('show controller');
	controller.createImage(req, res);
	
  /*  var code = qr.image("text to show in qr", { type: 'png', ec_level: 'H', size: 10, margin: 0 });
    res.setHeader('Content-type', 'image/png');
    code.pipe(res);
    controller.createImage1(req, res);
    res.render('index', { title: 'QR Page', qr: code });*/


/*var lwip = require('lwip');
var fs = require('fs');
// obtain an image object:

fs.readFile('D:/Mohanapriya/EasyGo/Tulips.jpg', function(err, buffer){
  lwip.open('image.jpg', function(err, image){

  // check err...
  // manipulate image:
  image.scale(0.5, function(err, image){

  	     });

    });
});*/
});
module.exports = router;
