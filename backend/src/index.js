const express = require('express');
require('./db');

const app = express();

const userRouter = require('./routers/userRouter');
const professionalRouter = require('./routers/professionalRouter');
const customerRouter = require('./routers/customerRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userRouter);
app.use(professionalRouter);
app.use(customerRouter);

app.get('/', (req, res) => {
    res.send('Base Page');
});



app.listen(8000);