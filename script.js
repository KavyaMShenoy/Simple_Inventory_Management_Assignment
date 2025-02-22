const express = require('express');
const morgan = require('morgan');
const routes = require('./src/routes/productsRoutes');

const loggingMiddleware = require('./src/middlewares/loggingMiddleware');

const app = express();

const PORT = 7000;

app.use(morgan('dev'));

app.use(express.json());

app.use(loggingMiddleware);

app.use('/products',routes);

app.listen(PORT,()=>{
    console.log(`Server running at https://localhost:${PORT}`);
})