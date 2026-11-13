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