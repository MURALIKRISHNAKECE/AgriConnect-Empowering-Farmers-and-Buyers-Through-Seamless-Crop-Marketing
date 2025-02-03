// Install dependencies: npm init -y, npm install express body-parser mysql2 cors
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());
const PORT = 3000;
// Dummy data storage (replace with a real database in production)
const crops = [];
const users = [{ email: 'test@farmer.com', password: 'password', userType: 'farmer' }];
// Routes
// Login
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        res.json({ message: `Welcome ${user.userType}`, userType: user.userType });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});
// Add Crop
app.post('/crops', (req, res) => {
    const crop = req.body;
    crops.push(crop);
    res.status(201).json({ message: 'Crop added successfully', crop });
});
// Get Crops
app.get('/crops', (req, res) => {
    res.json(crops);
});
// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});