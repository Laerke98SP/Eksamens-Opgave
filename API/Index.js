// Importing express and body-parser
import express from 'express';
import bodyParser from 'body-parser';

// Importing all the routes from routes folder
import userRoutes from './routes/user.js';
import userMatches from './routes/matches.js';
import userVisits from './routes/visits.js';
import userPotentials from './routes/potentials.js'

// Creating the server app and declaring the port to 5000
const app = express();
const PORT = 5000;

// Using the folder Frontend to access the index.html file to show when accessing the localhost
app.use(express.static('../Frontend'));
app.use(bodyParser.json());

// Declaring the endpoints and connecting them to the routes in routes folder
app.use('/user', userRoutes);
app.use('/match', userMatches);
app.use('/visits', userVisits);
app.use('/potentials', userPotentials);

// Basic response to see if it is working
app.get('/', (req, res) => {res.send('Hello from homepage')});

// Listening to the port 5000
app.listen(PORT, () => console.log(`Server running in port: http://localhost:${PORT}`));
