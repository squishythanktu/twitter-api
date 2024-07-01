import { Router } from 'express'
import formidable from 'formidable'
import path from 'path'
import { uploadImagesController } from '~/controllers/medias.controllers'
import { wrapRequestHandler } from '~/utils/handlers'

const mediasRouter = Router()

mediasRouter.post('/upload-image', wrapRequestHandler(uploadImagesController))

export default mediasRouter
