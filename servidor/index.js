const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');


//Creamos el servidor
const app = express();

//Conectamos a la base de datos
conectarDB();

//Agregamos un middleware
app.use(cors());

app.use(express.json())

app.use('/api/productos', require('./routes/producto'));


//Escucha desde el puerto 4000
app.listen(4000, () => {
    console.log('El servidor esta corriendo perfectamente');
})  