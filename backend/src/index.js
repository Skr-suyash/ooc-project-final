const express = require('express');
require('./db');

const app = express();

const userRouter = require('./routers/userRouter');
const professionalRouter = require('./routers/professionalRouter');
const customerRouter = require('./routers/customerRouter');
const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(userRouter);
app.use(professionalRouter);
app.use(customerRouter);
app.use(
  cors({
    origin: "http://localhost:5173", // Allow only this origin
  })
);
app.get('/', (req, res) => {
    res.send('Base Page');
});



app.listen(8000);