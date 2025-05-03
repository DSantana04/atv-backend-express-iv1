import express from 'express';
import dotenv from 'dotenv';
import db from './database/configdb.js';

import userRoute from './routes/user.route.js';

dotenv.config();
db.connect();
const app = express();

app.use(express.json());

app.use("/user", userRoute);

app.get('/', (req, res) => {
    res.send({message: 'API funcionando!'});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`funfando na porta http://localhost:${PORT}/`);
});

