import express from 'express'

import { CreateController } from '../controllers/questionOptions/createController'
import { ListController } from '../controllers/questionOptions/listController'

const router = express.Router()

router.get('/', ListController)
router.post('/', CreateController)

export default router