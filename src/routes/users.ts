import express from 'express'
import { LoginController } from '../controllers/users/loginController'
import { CreateController } from '../controllers/users/createController'
import { ListController } from '../controllers/users/listController'

const router = express.Router()

router.get('/', ListController)
router.post('/', CreateController)
router.post('/auth', LoginController)

export default router