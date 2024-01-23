const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');  // Import the CORS middleware
const app = express();
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
const io = require("socket.io")(server);

// Use the CORS middleware
app.use(cors());
app.use(express.json());

io.on('connection', (socket) => {
    console.log("connected");
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
