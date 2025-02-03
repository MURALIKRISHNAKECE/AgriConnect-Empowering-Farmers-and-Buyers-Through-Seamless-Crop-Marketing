// server.js
// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// Initialize the app
const app = express();
// Middlewares
app.use(bodyParser.json());  // Parses incoming requests with JSON payloads
app.use(cors());  // Enables Cross-Origin Resource Sharing
// Define the port
const PORT = 3000;
// Dummy data storage (replace with a real database in production)
const crops = [];
const users = [{ email: 'test@farmer.com', password: 'password', userType: 'farmer' }];
// Routes
// User Login
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        res.json({ message: `Welcome ${user.userType}`, userType: user.userType });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});
// Add a new crop
app.post('/crops', (req, res) => {
    const crop = req.body;
    crops.push(crop);
    res.status(201).json({ message: 'Crop added successfully', crop });
});
// Get all crops
app.get('/crops', (req, res) => {
    res.json(crops);
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});