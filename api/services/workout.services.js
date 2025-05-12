import Workout from '../models/Workout.js';

// Criar treino
export async function createWorkout(data) {
  return await Workout.create(data);
}

// Buscar todos os treinos do usuário
export async function getUserWorkouts(userId) {
  return await Workout.find({ userId });
}

// Buscar treino por ID (limitado ao user)
export async function getWorkoutById(id, userId) {
  return await Workout.findOne({ _id: id, userId });
}

// Atualização total
export async function updateWorkout(id, userId, newData) {
  return await Workout.findOneAndUpdate(
    { _id: id, userId },
    newData,
    { new: true }
  );
}

// Atualização parcial
export async function patchWorkout(id, userId, patchData) {
  return await Workout.findOneAndUpdate(
    { _id: id, userId },
    { $set: patchData },
    { new: true }
  );
}

// Deletar treino
export async function deleteWorkout(id, userId) {
  return await Workout.findOneAndDelete({ _id: id, userId });
}
