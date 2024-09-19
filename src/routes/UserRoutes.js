
const express = require ('express');
const { authenticateToken } = require('../controllers/UserControllers'); // Importa el middleware
const userController = require('../controllers/UserControllers');
const router = express.Router();  


//*User*/
router.get('/listarUser',authenticateToken,userController.listarUser)
router.get('/buscarUser/:id',userController.buscarUser)
router.post('/registrarUser/',userController.registrarUser)
router.delete('/eliminarUser/:id', userController.eliminarUser);
router.put('/actualizarUser/:id', userController.actualizarUser);


router.post('/login', userController.generateToken);

module.exports = router;
