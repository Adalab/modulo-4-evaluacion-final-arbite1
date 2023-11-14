//imports

const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

//arrancar el servidor
const app = express();

//configurar

app.use(cors());
app.use(express.json());

//conexión a la bases de datos
async function getConnection() {
  //creary configurar la conexion
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "Library",
  });

  connection.connect();
  return connection;
}

const port = process.env.PORT || 4500;
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});

//Endpoints
//Obtener todos los libros (GET /libros)
app.get("/Library", async (req, res) => {
  //Select a la bases de datos
  let query = "SELECT * FROM Library.books";

  //hacer la conexión con la BD
  const conn = await getConnection();

  //Ejecutar esa consulta
  const [results] = await conn.query(query);
  const numOfElements = results.length;

  //Enviar una respuesta
  res.json({
    info: { count: numOfElements }, // número de elementos
    results: results, // listado
  });
});
