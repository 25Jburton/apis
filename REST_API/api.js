// Import the Express module
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

// Define a route for GET requests
app.get('/data', (req, res) => {
    res.json({ message: 'Returning data for users' });
});

// Define a route for POST requests
app.post('/data', (req, res) => {
    const newData = req.body;
    res.json({ message: 'Data created', user: newData });
});

// Define a route for PUT requests
app.put('/data/:id', (req, res) => {
    const dataId = req.params.id;
    const updatedData = req.body;
    res.json({ message: `Data with ID ${dataId} updated`, updatedData });
});

// Define a route for DELETE requests
app.delete('/data/:id', (req, res) => {
    const dataId = req.params.id;
    res.json({ message: `Data with ID ${dataId} deleted` });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});