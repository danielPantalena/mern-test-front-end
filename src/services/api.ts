import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const baseURL = process.env.REACT_APP_SERVER ?? 'http://localhost:3333';

const api = axios.create({
  baseURL,
  timeout: 5000,
  headers: { 'Content-type': 'application/json' },
});
