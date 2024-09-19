const db = require('../Config/db')

//Repuestos
exports.registrar = async(req, res) => {
    const { nombre, precio, productID } = req.body;

    const sql = "INSERT INTO repuestos (nombre, precio, product_id) VALUES ($1, $2, $3)";

    // Ejecuta la consulta
    const respuesta= await db.query(sql, [nombre, precio, productID], (err, result) => {
        if (err) {
            console.error('Error al registrar el usuario:', err);
            return res.status(500).json('Error al registrar el usuario');
        }
        res.status(200).json('El repuesto ha sido registrado');
    });
};

exports.eliminar = async(req, res) => {
    const id = req.params.id;


    const sql = "DELETE FROM repuestos WHERE product_id = $1";

    // Ejecuta la consulta
    try {
        const respuesta = await db.query(sql, [id]); // Ejecuta la consulta con el parámetro id
        if (respuesta.rowCount === 0) {
            return res.status(404).json('Repuesto no encontrado'); // Si no se elimina nada, devuelve 404
        }
        res.status(200).json('El repuesto ha sido eliminado');
    } catch (err) {
        console.error('Error al eliminar el repuesto:', err);
        return res.status(500).json('Error al eliminar el repuesto');
    }
};




exports.actualizar = async(req, res) => {
    const id = req.params.id;
    const { nombre, precio, } = req.body;


    const sql = "UPDATE repuestos SET nombre = $1, precio =$2 WHERE product_id =$3";

    // Ejecuta la consulta
    try {
        const respuesta = await db.query(sql, [nombre, precio, id]); // Ejecuta la consulta con el parámetro id
        if (respuesta.rowCount === 0) {
            return res.status(404).json('Repuesto no encontrado'); // Si no se elimina nada, devuelve 404
        }
        res.status(200).json('El repuesto ha sido actualizado');
    } catch (err) {
        console.error('Error al actualizar el repuesto:', err);
        return res.status(500).json('Error al actualizar el repuesto');
    }
};

exports.buscar = async(req, res) => {
    const id = req.params.id;


    const sql = ("SELECT * FROM repuestos WHERE product_id = $1");

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

exports.listar = async(req, res) => {

    const sql = ("SELECT * FROM repuestos");

    // Ejecuta la consulta
    try {
        const respuesta = await db.query(sql); // Ejecuta la consulta con el parámetro id
        if (respuesta.rowCount === 0) {
            return res.status(404).json('Repuesto no encontrado'); // Si no se elimina nada, devuelve 404
        }
        res.status(200).json(respuesta.rows);
    } catch (err) {
        console.error('Error al actualizar no ha sido encontrado:', err);
        return res.status(500).json('Error al encontrar el repuesto');
    }
};