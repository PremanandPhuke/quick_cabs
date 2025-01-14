const http= require('http');
const app= require('./app');
const { connect } = require('http2');
// const { log } = require('console');
const port = process.env.PORT || 3000;


const server= http.createServer(app);

server.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
    
});