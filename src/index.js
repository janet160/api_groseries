import app from './app.js';
import database from './db.js';
const c = console.log.bind(console);
const port = process.env.SERVER_PORT;
console.log("funciona bien")
app.listen(port, () => { 
    c(`http://localhost:${port}/`);
});

