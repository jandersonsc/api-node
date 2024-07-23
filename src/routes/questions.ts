import express from 'express'

import { CreateController } from '../controllers/questions/createController'
import { ListController } from '../controllers/questions/listController'
import { CompiledController } from '../controllers/questions/compiledController'

const router = express.Router()

router.get('/', ListController)
router.get('/:id/compiled', CompiledController)
router.post('/', CreateController)

export default router