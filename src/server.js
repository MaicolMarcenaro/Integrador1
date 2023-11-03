import http from 'http';
import app from './app.js';
import { init } from './db/mongodb.js';

const serverhttp = http.createServer(app);
const PORT = 8080;

await init();

serverhttp.listen(PORT,()=>{
    console.log(`Server corriendo en puerto: ${PORT}`)
})