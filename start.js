var express = require('express')
var multer  = require('multer')
const fs = require('fs');
const bodyParser = require('body-parser');

const path = require('path');
const imagePath = './uploads';
//redis
const redis = require("redis");
const client = redis.createClient({url: process.env.REDIS_URL});
//^^
//AWS
const AWS = require('aws-sdk');



var port = 3000;

var app = express()

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
var upload = multer({ storage: storage })

app.get('/uploads', (req, res) => {
  // Read the images from the folder
  fs.readdir(imagePath, (err, files) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading images');
      return;
    }

    // Filter the files to get only image files
    const imageFiles = files.filter(file => {
      const fileExtension = file.split('.').pop();
      return ['jpg', 'jpeg', 'png', 'gif','HEIC','heic'].includes(fileExtension.toLowerCase());
    });

    // Send the image file names as a response
    res.json(imageFiles);
  });
});


/*
app.use('/a',express.static('/b'));
Above line would serve all files/folders inside of the 'b' directory
And make them accessible through http://localhost:3000/a.
*/
// Define the folder path containing the images
const folderPath = path.join(__dirname, '/uploads');

// Serve static files (e.g., images)
app.use(express.static(folderPath));

app.use(express.static(__dirname + '/dist'));

app.use('/uploads', express.static('uploads'));
// Define a route for the home page

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.get('/a', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/admin.html'));
});
app.get('/l', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/login.html'));
});
app.get('/aa', (req, res) => {
  res.sendFile(path.join(__dirname + '/admin.html'));
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/admin.html'));
});

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Replace this with your own authentication logic
  if (username === 'Nathan' && password === 'Hunter1409') {
    //res.send(`<h2>Welcome, ${username}!</h2>`);
    res.redirect('/admin'); // Redirect to the dashboard page

  } else {
    res.send('<h2>Invalid username or password</h2>');
  }
});

//app.get('/admin', (req, res) => {
 // res.sendFile(path.join(__dirname, 'dist', 'admin.html'));
//});
app.post('/profile-upload-single', upload.single('profile-file'), function (req, res, next) {
  // req.file is the `profile-file` file
  // req.body will hold the text fields, if there were any
  console.log(JSON.stringify(req.file))
  var response = '<a href="/">Home</a><br>'
  response += "Files uploaded successfully.<br>"
  response += `<img src="${req.file.path}" /><br>`
  return res.send(response)
})

app.post('/profile-upload-multiple', upload.array('profile-files', 12), function (req, res, next) {
    // req.files is array of `profile-files` files
    // req.body will contain the text fields, if there were any
    var response = '<a href="/">Home</a><br>'
    response += "Files uploaded successfully.<br>"
    for(var i=0;i<req.files.length;i++){
        response += `<img src="${req.files[i].path}" /><br>`
    }
    
    return res.send(response)
})

//app.listen(port,() => console.log(`Server running on port ${port}!`))
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});