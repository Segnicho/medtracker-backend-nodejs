import {addAllergy, deleteALlergy, getAllergy } from '../controllers/allergy.js'

import express  from "express";
const router = express.Router()
router.post('/', addAllergy)
router.get('/:id', getAllergy)
router.delete('/:id', deleteALlergy)


export default router
