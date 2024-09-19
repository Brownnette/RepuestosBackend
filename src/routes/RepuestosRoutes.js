

const express = require ('express');
const repuestosController = require('../controllers/RepuestosControllers');
const router = express.Router();  




/*Repuestos */
router.get('/listar',repuestosController.listar)
router.get('/buscar/:id',repuestosController.buscar)
router.post('/registrar',repuestosController.registrar)
router.delete('/eliminar/:id',repuestosController.eliminar)
router.put('/actualizar/:id',repuestosController.actualizar)

module.exports =router;

/*El profesor acá puso un app.use(userRoutes) ¿también lo pongo?*/