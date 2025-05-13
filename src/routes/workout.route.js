import express from 'express';
import {
  postWorkout,
  getAllWorkouts,
  getWorkout,
  putWorkout,
  patchWorkoutHandler,
  deleteWorkoutHandler
} from '../controller/workout.controller.js';

import verifyToken from '../middleware/jwt.token.middleware.js';

const router = express.Router();

// Middleware JWT aplicado a todas as rotas
router.use(verifyToken);

// POST: Criar novo treino
router.post('/', postWorkout);

// GET: Listar todos os treinos do usuário autenticado
router.get('/', getAllWorkouts);

// GET: Obter um treino específico por ID
router.get('/:id', getWorkout);

// PUT: Atualizar completamente um treino por ID
router.put('/:id', putWorkout);

// PATCH: Atualizar parcialmente um treino por ID
router.patch('/:id', patchWorkoutHandler);

// DELETE: Deletar um treino por ID
router.delete('/:id', deleteWorkoutHandler);

export default router;
