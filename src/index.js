import app from './app.js';
import database from './db.js';
const c = console.log.bind(console);
const port = process.env.PORT;

app.listen(port, () => { 
    console.log('Server on port:' + port);
});

