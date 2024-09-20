
const express = require ('express');
const { authenticateToken } = require('../controllers/UserControllers'); // Importa el middleware
const userController = require('../controllers/UserControllers');
const router = express.Router();  
const app = express();
const { errorHandler } = require('../middleware/error');


app.use(express.json());
app.use(errorHandler);

app.post('users/login', (req, res) => {
    const { user, password } = req.body;
    console.log(`User: ${user}, Password: ${password}`); // Añade esto para ver qué datos llegan

    // Aquí debes verificar el usuario y la contraseña con tu base de datos
    if (user === 'user' && password === 'password') {
        const token = jwt.sign({ user }, process.env.CLAVE_JWT, { expiresIn: '1h' });
        return res.json({ accessToken: token });
    } else {
        console.log('Credenciales inválidas'); // Verifica el flujo de error
        return res.status(401).json({ message: 'Credenciales inválidas' });
    }
});


//*User*/
router.post('/login', userController.generateToken);
router.get('/listarUser',authenticateToken,userController.listarUser)
router.get('/buscarUser/:id',authenticateToken,userController.buscarUser)
router.post('/registrarUser/',userController.registrarUser)
router.delete('/eliminarUser/:id',authenticateToken, userController.eliminarUser);
router.put('/actualizarUser/:id',authenticateToken, userController.actualizarUser);



module.exports = router;
