const express = require('express');


const app = express();
const PORT = process.env.PORT || 3000;

//Getting API json info
app.get('/', (req, res) => res.json({ msg: 'Welcome to Contact API' }));

//Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));