// endpoints are points in our code that we have defined to listen to user requests,
const express = require('express');
const app = express();                   
// cant do this: const app = require('express'); because express must be called; 

const bodyParser = require('body-parser');
const bc = require('./controllers/books_controller.js'); // bc = book controller

app.use(bodyParser.json());                 // Top level middleware (translator)

app.get('/api/books', bc.read);             // get endpoint 
app.post('/api/books', bc.create);          // post endpoint
app.put('/api/books', bc.update);           // put endpoint 
app.delete('/api/books', bc.delete);        // delete endpoint 


app.use(express.static(__dirname + "/../build")); // express.static() serves the URL 
                                                  // this line must precede the app.listen() call
                                                  // open up http://localhost:3000 in your browser
                                                  // in CL  node server/ 

const port = 3000;
app.listen(port, () => console.log('Listen to port:', port));  // listen method invocation
                               // (`Listen to port: ${port}')


