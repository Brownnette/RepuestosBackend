
const express = require ('express');
const { authenticateToken } = require('../controllers/UserControllers'); // Importa el middleware
const userController = require('../controllers/UserControllers');
const router = express.Router();  
const app = express();
const { errorHandler } = require('../middleware/error');


app.use(express.json());
app.use(errorHandler);


//*User*/
router.get('/listarUser',authenticateToken,userController.listarUser)
router.get('/buscarUser/:id',authenticateToken,userController.buscarUser)
router.post('/registrarUser/',authenticateToken,userController.registrarUser)
router.delete('/eliminarUser/:id',authenticateToken, userController.eliminarUser);
router.put('/actualizarUser/:id',authenticateToken, userController.actualizarUser);


router.post('/login', userController.generateToken);

module.exports = router;
