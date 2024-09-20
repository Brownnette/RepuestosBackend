const express = require ('express');
const {errorHandler} = require ('./src/middleware/error')
const dotenv = require('dotenv');
const cors = require('cors');  
const repuestosRoutes = require ('./src/routes/RepuestosRoutes');
const userRoutes = require ('./src/routes/UserRoutes');
const {Client} = require('pg');


require('dotenv').config();

const app =express();
app.use(cors());
app.use(express.json());
app.use(errorHandler);

app.use('/repuestos', repuestosRoutes);
app.use('/users', userRoutes); ;

app.use((err, req, res, next) => {
    res.status(500).send('Internal Server Error');
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    return console.log(`El servidor está corriendo en el puerto ${PORT}`);
});