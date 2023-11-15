//imports

const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
//arrancar el servidor
const app = express();

//configurar

app.use(cors());
app.use(express.json());

//conexión a la bases de datos
async function getConnection() {
  //crear y configurar la conexion
  const connection = await mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DBDB,
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
  conn.end();
});

//Crear una nuevo libro (POST )
app.post("/Library", async (req, res) => {
  const bookData = req.body; //objeto
  const { titulo, autor, descripción, genero, paginas } = bookData;

  //Validaciones

  let sql =
    "INSERT INTO `Library`.`books` (título, autor, descripción, género, páginas)VALUES ('?', '?', '?', '?', '?')";

  try {
    //hacer la conexión con la BD
    const conn = await getConnection();

    //Ejecutar esa consulta
    const [results] = await conn.query(sql, [
      bookData.titulo,
      bookData.autor,
      bookData.descripción,
      bookData.genero,
      bookData.paginas,
    ]);

    // Valida si el libro existe, o está duplicado
    //validar si se ha insertado o no
    if (results.affectedRows === 0) {
      res.json({
        success: false,
        message: "No se ha podido insertar",
      });
      return;
    }

    res.json({
      success: true,
      id: results.insertId, // id que generó MySQL para la nueva fila
    });
  } catch (error) {
    res.json({
      success: false,
      message: `Ha ocurrido un error${error}`,
    });
  }
  conn.end();
});

//Actualizar un libro existente (PUT)
//id: url params
//info actualizar: Body params
app.put("/Library/:id", async (req, res) => {
  //Obtener los valores del req.body
  const bookData = req.body;
  const { titulo, autor, descripción, genero, paginas } = bookData;

  //Obtener el id del req.params
  const idBooks = req.params.id;

  //buscar si este id existe en mi bd

  let sql =
    "UPDATE FROM `Library`.`books`SET descripción = '?' WHERE idbooks = ?";

  //hacer la conexión con la BD
  const conn = await getConnection();

  //Ejecutar esa consulta
  const [results] = await conn.query(sql, [
    titulo,
    autor,
    descripción,
    genero,
    paginas,
    idBooks,
  ]);

  res.json({
    success: true,
    message: "Actualizado correctamente",
  });
  conn.end();
});

//Eliminar un libro
//id: url params
app.delete("/Library/:id", async (req, res) => {
  //Obtener el id del req.params
  const idBooks = req.params.id;

  //buscar si este id existe en mi bd
  //Puedo hacer un select a la BD si exste hago el delete
  //Sino existe envio una res.json(error)

  let sql = "DELETE FROM `Library`.`books` WHERE idbooks = ? ";

  //hacer la conexión con la BD
  const conn = await getConnection();

  //Ejecutar esa consulta
  const [results] = await conn.query(sql, [idBooks]);

  res.json({
    success: true,
    message: "Eliminado correctamente",
  });
  conn.end();
});

//Proceso de registro
//usuario, contraseña, email, nombre....
app.post("/api/register", async (req, res) => {
  const nombre = req.body.nombre;
  const password = req.body.password;
  const email = req.body.email;

  //encriptar la contraseña
  const passwordHashed = await bcrypt.hash(password, 5);
});
