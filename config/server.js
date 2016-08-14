// config/server.js

'use strict';

//create an express application
var express         = require('express');
var app             = express();

//express middleware
var dotenv          = require('dotenv').config();
var morgan          = require('morgan');
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
var cookieParser    = require('cookie-parser');
var multer          = require('multer');
var compression     = require('compression');
var responseTime    = require('response-time');
var errorhandler    = require('errorhandler');
var logger          = require('winston');
var routes          = require('require-dir')('../app/routes');

//express logger
app.use(morgan('combined')); /* 'common', 'short', 'tiny', 'dev' */

//cookies
app.use(cookieParser());

// bodyparser for application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({type: '*/*'}));
app.use(methodOverride());

//multipart file uploaded
//app.use(multer({ dest: '/tmp/'}));

// compress all responses
//app.use(compression());

//set X-Response-Time
app.use(responseTime());

//remove X-Powered-By
app.disable('x-powered-by');

//CORS & NOCACHE
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next();
});

//root router for the server
app.get('/', function (req, res) {
  res.send('Server is running...')
})

// ROUTES
var router = express.Router();

// Initialize all routes
logger.info('Initializing routes...');
Object.keys(routes).forEach(function(routeName) {
  require('../app/routes/' + routeName)(router);
});


// REGISTER ROUTER
app.use("/v1/api", router);


// Error handler
app.use(function(err, req, res, next) {
console.log('ERROR HANDLER');
console.error(err);
  res.status(err.status || 500);
  res.json({
    code : err.status || 500,
    message: err.message,
    error: (app.get('env') === 'development' ? err : {})
  });
  //next(err);
});


// START THE SERVER
var port = process.env.PORT || 8080;

app.listen(port, function(){
  console.log('Server started on port ' + port);
});




















/*

app.get('/', function(req, res) {
  console.log("Cookies: ", req.cookies)
})

app.use(express.static('public'));

app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})

app.get('/auth', function (req, res) {

   // Prepare output in JSON format
   response = {
       first_name:req.query.first_name,
       last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

app.post('/file_upload', function (req, res) {

   console.log(req.files.file.name);
   console.log(req.files.file.path);
   console.log(req.files.file.type);

   var file = __dirname + "/" + req.files.file.name;
   fs.readFile( req.files.file.path, function (err, data) {
        fs.writeFile(file, data, function (err) {
         if( err ){
              console.log( err );
         }else{
               response = {
                   message:'File uploaded successfully',
                   filename:req.files.file.name
              };
          }
          console.log( response );
          res.end( JSON.stringify( response ) );
       });
   });
})

*/

/*
https://www.sitepoint.com/creating-restful-apis-express-4/
http://javabeat.net/expressjs-nodejs-mongoosejs/
https://github.com/Walk4Muscle/Swagger-node-express3-sample
https://stormpath.com/blog/build-nodejs-express-stormpath-app
http://javabeat.net/expressjs-bootstrap/
http://coenraets.org/blog/2012/10/nodecellar-sample-application-with-backbone-js-twitter-bootstrap-node-js-express-and-mongodb/
*/

