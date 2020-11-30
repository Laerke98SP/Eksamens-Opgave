import express from 'express';
import bodyParser from 'body-parser';

import userRoutes from './routes/user.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/user', userRoutes);

app.get('/', (req, res) => {res.send('Hello from homepage')});

app.listen(PORT, () => console.log(`Server running in port: http://localhost:${PORT}`))