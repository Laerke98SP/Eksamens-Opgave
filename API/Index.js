import express from 'express';
import bodyParser from 'body-parser';

import userRoutes from './routes/user.js';
import userMatches from './routes/matches.js';
import userInterest from './routes/inserest.js';

const app = express();
const PORT = 5000;

app.use(express.static('../Frontend'))
app.use(bodyParser.json());

app.use('/user', userRoutes);
app.use('/match', userMatches);
app.use('/interest', userInterest);

app.get('/', (req, res) => {res.send('Hello from homepage')});

app.listen(PORT, () => console.log(`Server running in port: http://localhost:${PORT}`))