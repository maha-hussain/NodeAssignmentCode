// Create a local server using express that listens to port '3000'.

const express = require('express');

const app = express();
const port = 3000;

// Build a response that returns 'hello world' on the root path: http://localhost:3000/
app.get('/', (req,res) =>{
res.send('Hello World!');
});

// Now modify the middleware to add a new route “firstServer” and display a message “Hi there! This is my first route built using express framework”
app.get('/firstServer', (req,res) => {
res.send('Hi there! This is my first route built using the express framework');
});


// Now modify the middleware to add a new route that will accept “firstUser/:id” and display the message "Hi there, your user ID is ..."

app.use('/firstUser/:id', (req,res, next) => {
    console.log('Request Type:', req.method) 
    next ();
      });

app.get('/firstUser/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Hi there, your user ID is ${id}!`);
});



// Now modify your code to handle a route that does not exist. Return a 404 page for a route that's not handled eg. '/noroute'.

app.use((req, res)=>{
res.status(404).send(`Error 404: Oops, the page you're looking for does not exist! ( • ᴖ • ｡) `)
});


app.listen(port,() =>{
    console.log(`this app is listening to port ${port}`);
});



