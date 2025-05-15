import { Router } from 'express';
import UsersController from './controllers/users.js';
import validateUser from './middlewares/validate-user.js';
import validatePassword from './middlewares/validate-password.js';
import validatePasswordsMatch from './middlewares/validate-passwords-match.js';
import verifyToken from './middlewares/verify-token.js';

const router = Router();
 
router.post('/users', validateUser, validatePasswordsMatch, UsersController.createUser);
router.post('/users/:id/passwords', validatePassword, UsersController.createPassword);

router.get('/users', UsersController.getAll);
router.get('/users/:id', UsersController.getUser);
router.get('/users/:id/passwords', UsersController.getAllPasswordsFrom);
router.get('/users/:userId/passwords/:passId', UsersController.getPasswordFrom);

// router.put('/users/:id', validateUser, UsersController.updateUser);
router.put('/users/:userId/passwords/:passId', validatePassword, UsersController.updatePasswordFrom);

router.delete('/users/:id', UsersController.deleteUser);
router.delete('/users/:userId/passwords/:passId', UsersController.deletePasswordFrom);

router.post('/login', validateUser, UsersController.login);
router.post('/logout', verifyToken, UsersController.logout);

export default router;
