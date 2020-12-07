import express from 'express';
import bodyParser from 'body-parser';
// import fs from 'fs';

import userRoutes from './routes/user.js';
// import userCreation from './routes/createUser.js';
import userMatches from './routes/matches.js';
import userInterest from './routes/inserest.js';
import userVisits from './routes/visits.js';


const app = express();
const PORT = 5000;

app.use(express.static('../Frontend'));
app.use(bodyParser.json());

app.use('/user', userRoutes);
// app.use('/createUser', userCreation);
app.use('/match', userMatches);
app.use('/interest', userInterest);
app.use('/visits', userVisits);

app.get('/', (req, res) => {res.send('Hello from homepage')});

app.listen(PORT, () => console.log(`Server running in port: http://localhost:${PORT}`));



// server.get('/Login', function(req, res){  // Hver gang denne path med http verb bliver kaldt, så vil vi starte en fubnktion med 2 parametrer, req & res
//     fs.readFile(__dirname + '/client/Login.html', 'utf8', function(err, text){
//          res.send(text);
//      });// hver gang der kommer en get request, sender vi frontpage ud til browseren, som er en en html fil.
// })