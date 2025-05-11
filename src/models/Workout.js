import mongoose from 'mongoose';

const ExerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sets: { type: Number, required: true },
  reps: { type: Number, required: true },
  weight: { type: Number }, // Peso sera em kg
});

const WorkoutSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  date: { type: Date, default: Date.now },
  duration: { type: Number }, // A duracao do treino sera em minutos
  exercises: [ExerciseSchema],
  notes: { type: String }
});

const Workout = mongoose.model('Workout', WorkoutSchema);

export default Workout;