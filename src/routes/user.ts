import express from 'express'
import { Login } from '../controllers/user/login'
import { MakeNewAccount } from '../controllers/user/newAccout'
const router = express.Router()

router.post('/login', Login)
router.post('/new-account', MakeNewAccount)

export default router