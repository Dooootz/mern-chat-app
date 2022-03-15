// initialize express app
const express = require('express')
// instantiate express app
const app = express()

// create chat rooms
const rooms = ['general', 'tech', 'finance', 'crypto'];
// require cors 
const cors = require('cors');

// pass data as urlEncoded & JSON data 
app.use(express.urlencoded({extended: ture}));
app.use(express.json());
// cors allows the front & backend to communicate 
app.use(cors());


const server = require('http').createServer(app);
const PORT = 5001;
const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
})


server.listen(PORT, () => {
    console.log('ITS ALIVE!!!' , PORT)
}) 
