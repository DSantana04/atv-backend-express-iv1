import {
  createWorkout,
  getUserWorkouts,
  getWorkoutById,
  updateWorkout,
  patchWorkout,
  deleteWorkout
} from '../services/workout.services.js';

// Criar novo treino
export async function postWorkout(req, res) {
  try {
    const workout = await createWorkout({ ...req.body, userId: req.userId });
    res.status(201).json(workout);
  } catch (err) {
    console.error('Erro ao criar treino:', err);
    res.status(400).json({ error: 'Erro ao criar treino' });
  }
}

// Listar treinos do usuário logado
export async function getAllWorkouts(req, res) {
  try {
    const workouts = await getUserWorkouts(req.userId);
    res.json(workouts);
  } catch (err) {
    console.error('Erro ao buscar treinos:', err);
    res.status(500).json({ error: 'Erro interno ao buscar treinos' });
  }
}

// Buscar treino por ID
export async function getWorkout(req, res) {
  try {
    const workout = await getWorkoutById(req.params.id, req.userId);
    if (!workout) return res.status(404).json({ error: 'Treino não encontrado' });
    res.json(workout);
  } catch (err) {
    console.error('Erro ao buscar treino:', err);
    res.status(400).json({ error: 'ID inválido ou erro ao buscar treino' });
  }
}

// Atualizar treino por completo
export async function putWorkout(req, res) {
  try {
    const updated = await updateWorkout(req.params.id, req.userId, req.body);
    if (!updated) return res.status(404).json({ error: 'Treino não encontrado' });
    res.json(updated);
  } catch (err) {
    console.error('Erro ao atualizar treino:', err);
    res.status(400).json({ error: 'Erro ao atualizar treino' });
  }
}

// Atualizar treino parcialmente
export async function patchWorkoutHandler(req, res) {
  try {
    const patched = await patchWorkout(req.params.id, req.userId, req.body);
    if (!patched) return res.status(404).json({ error: 'Treino não encontrado' });
    res.json(patched);
  } catch (err) {
    console.error('Erro ao atualizar treino parcialmente:', err);
    res.status(400).json({ error: 'Erro ao atualizar treino parcialmente' });
  }
}

// Deletar treino
export async function deleteWorkoutHandler(req, res) {
  try {
    const deleted = await deleteWorkout(req.params.id, req.userId);
    if (!deleted) return res.status(404).json({ error: 'Treino não encontrado' });
    res.json({ message: 'Treino deletado com sucesso' });
  } catch (err) {
    console.error('Erro ao deletar treino:', err);
    res.status(400).json({ error: 'Erro ao deletar treino' });
  }
}
