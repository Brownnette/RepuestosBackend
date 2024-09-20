
const db = require('../Config/db')
require(`dotenv`);
require('jsonwebtoken');


/* User*/
//users
exports.listarUser = async(req, res) => {

    const sql = ("SELECT * FROM usuario");

    // Ejecuta la consulta
    try {
        const respuesta = await db.query(sql); // Ejecuta la consulta con el parámetro id
        if (respuesta.rowCount === 0) {
            return res.status(404).json('Usuario no encontrado'); // Si no se elimina nada, devuelve 404
        }
        res.status(200).json(respuesta.rows);
    } catch (err) {
        console.error('Error al encontrar el usuario:', err);
        return res.status(500).json('Error al encontrar el usuario');
    }
};

exports.buscarUser = async(req, res) => {
    const id = req.params.id;


    const sql = ("SELECT * FROM usuario WHERE id = $1");

    // Ejecuta la consulta
    try {
        const respuesta = await db.query(sql, [id]); // Ejecuta la consulta con el parámetro id
        if (respuesta.rowCount === 0) {
            return res.status(404).json('Repuesto no encontrado'); // Si no se elimina nada, devuelve 404
        }
        res.status(200).json(respuesta.rows);
    } catch (err) {
        console.error('Error al actualizar no ha sido encontrado:', err);
        return res.status(500).json('Error al encontrar el repuesto');
    }
};


exports.registrarUser = async(req, res) => {
    const { new_user, new_password,new_email } = req.body;

    const sql = 'INSERT INTO usuario ("user", "password","email" ) VALUES ($1, $2, $3)';

    // Ejecuta la consulta
    const respuesta= await db.query(sql, [new_user, new_password,new_email], (err, result) => {
        if (err) {
            console.error('Error al registrar el usuario:', err);
            return res.status(500).json('Error al registrar el usuario');
        }
        res.status(200).json('El usuario ha sido registrado');
    });
};

exports.eliminarUser = async(req, res) => {
    const id = req.params.id;
    const sql = 'DELETE FROM usuario WHERE id = $1';


    try {
        const respuesta = await db.query(sql, [id]); // Ejecuta la consulta con el parámetro id
        if (respuesta.rowCount === 0) {
            return res.status(404).json('Usuario no encontrado'); // Si no se elimina nada, devuelve 404
        }
        res.status(200).json('El Usuario ha sido eliminado');
    } catch (err) {
        console.error('Error al eliminar el Usuario:', err);
        return res.status(500).json('Error al eliminar el Usuario');
    }
};



exports.actualizarUser = async (req, res) => {
    const id = req.params.id;
    const { user, password } = req.body;

    const sql = 'UPDATE usuario SET "user" = $1, password = $2 WHERE id = $3';

    try {
        // Ejecuta la consulta con el parámetro id
        const respuesta = await db.query(sql, [user, password, id]); 

        if (respuesta.rowCount === 0) {
            return res.status(404).json('Usuario no encontrado'); // Si no se elimina nada, devuelve 404
        }
        res.status(200).json('El Usuario ha sido actualizado');
    } catch (err) {
        console.error('Error al actualizar el usuario:', err);
        return res.status(500).json('Error al actualizar el usuario');
    }
};


/* Token*/
exports.generateToken = async(req, res) => {
    const { user, password } = req.body;
    const sql = 'SELECT * FROM usuario where "user"= $1';
    const respuesta= await db.query(sql, [user]);
        if (respuesta.rows==0 ){
            return res.status(404).json({mensaje:'usuario no encontrado'})
        }
        console.log (respuesta);
        console.log(user);
        console.log(password)
        const resultado = respuesta.rows[0];
        if (resultado['password'] == password){
            const accessToken = jwt.sign({user:resultado['id']},`${process.env.CLAVE_JWT}`, {expiresIn: '1h'});
            return res.status(200).json({accessToken});
        }
        return res.status(404).json({mensaje:'usuario no encontrado'})
};


const jwt = require('jsonwebtoken');

exports.authenticateToken = (req, res, next) => {
    const authHeaders = req.headers['authorization'];
    const token = authHeaders && authHeaders.split(' ')[1]; // Aquí corriges el uso de split(' ')[1]
    
    if (!token) {
        return res.status(401).json({ error: 'Auth Token Not Found' });
    }

    jwt.verify(token, `${process.env.CLAVE_JWT}`, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Invalid Token' });
        }
        req.user = user; // Guarda la información del usuario decodificado en la request
    });
    next(); // Llama a next() para continuar si el token es válido
};




