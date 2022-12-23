const express = require('express');
const cors = require("cors");
const conectarDB = require('./util/conexion');

// Creamos el servidor
const app = express();

// Conectamos a la BD
conectarDB();
app.use(cors())

app.use(express.json());

app.use('/api/productos', require('./router/producto'));

const PUERTO =`${process.env.PORT}` || 3000;
app.listen(PUERTO, () => {
    console.log(`appInventario escuchando en puerto `+PUERTO);
});


