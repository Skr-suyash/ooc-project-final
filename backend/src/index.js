const express = require('express');
require('./db');

const app = express();

const userRouter = require('./routers/userRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userRouter);

app.get('/', (req, res) => {
    res.send('Base Page');
});



app.listen(8000);