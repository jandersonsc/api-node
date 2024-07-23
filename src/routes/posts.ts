import express from 'express'
import { CreateController } from '../controllers/posts/createController'
import { ListController } from '../controllers/posts/listController'

const router = express.Router()

router.get('/', ListController)
router.post('/', CreateController)

export default router