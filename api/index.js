const config = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');

const bookRoutes = require('./server/routes/bookRoutes');

config.config();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const port = process.env.PORT || 8082;

app.use('/books', bookRoutes);

app.get('*', (req, res) => {
    res.status(200).send({
        message: 'Welcome to this API!'
    });
});

app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
});

