const {Client} = require ('pg')
require('dotenv').config();
const client = new Client({
    host:'localhost',
    user: 'postgres',
    password: 'hermanoXD',
    database: 'Repuestos3J',
    port: 5432,
});
client.connect()
    .then(() => console.log('Conectado a la base de datos PostgreSQL'))
    .catch(err => console.error('Error de conexión', err.stack));
module.exports=client;