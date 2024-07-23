import express from 'express'

import { CreateController } from '../controllers/answers/createController'
import { ListController } from '../controllers/answers/listController'

const router = express.Router()

router.get('/', ListController)
router.post('/', CreateController)

export default router