import cors from 'cors'
import express from 'express'
import apicache from 'apicache'

import fileRouter from './routes/files.routes.js'

import { config } from './config.js'

const cache = apicache.middleware
export const app = express()

app.use(express.json())
app.use(cors(config.corsOptions))
app.use(cache('5 minutes'))

app.use(fileRouter)

export default app
