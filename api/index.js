import express from 'express';
import dotenv from 'dotenv';
import db from './database/configdb.js';

import exampleRoute from './routes/example.route.js';
import userRoute from './routes/user.route.js';
import workoutRoute from './routes/workout.route.js';

dotenv.config();
db.connect();

const app = express();
app.use(express.json());

app.use("/user", userRoute);
app.use("/secureExampleRoute", exampleRoute);
app.use("/workout", workoutRoute);

app.get('/', (req, res) => {
    res.send({message: 'API funcionando!'});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta http://localhost:${PORT}/`);
});

