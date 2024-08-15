import { Router } from 'express'
import { getFilesData, getFilesList } from '../controller/filesController.js'

const router = Router()

router.get('/files/data', getFilesData)
router.get('/files/list', getFilesList)

export default router