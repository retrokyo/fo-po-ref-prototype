const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const resultsRouter = require('./routers/ResultsRouter');
const PORT = 4000;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/results', resultsRouter);


mongoose.connect('mongodb://127.0.0.1:27017/products', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

app.listen(PORT, () => {
    console.log(`Server is running on Port: ${PORT}`);
});