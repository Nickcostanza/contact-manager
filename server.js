const express = require('express');
const connectDB = require('./config/db');
const app = express();
const PORT = process.env.PORT || 5000;


//init middleware
app.use(express.json({ extended: false }));

// Connect DB
connectDB();


//Getting API json info
app.get('/', (req, res) => res.json({ msg: 'Welcome to Contact API' }));

//Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));