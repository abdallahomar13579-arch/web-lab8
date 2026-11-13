import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const app = express();
const PORT = process.env.PORT || 3000;
 
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, 'public');
 
const COURSES = [
  { id: 1, title: 'Web Programming', credits: 6 },
  { id: 2, title: 'Computer Architecture', credits: 5 },
  { id: 3, title: 'Numerical Methods', credits: 4 },
  { id: 4, title: 'Database Management Systems', credits: 5 },
];
 
let requestsServed = 0;

function requestLogger(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
}
 
function requestCounter(req, res, next) {
  requestsServed += 1;
  next();
}
 
app.use(requestLogger);

app.use(requestCounter);
 
app.use(express.static(PUBLIC_DIR));
 
app.get('/hello', (req, res) => {
  res.type('text/plain').send("Hello from Abdallah's server");
});