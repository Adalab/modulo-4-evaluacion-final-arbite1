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
    password: "arbite",
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
  conn.end();
});
// //Obtener una receta por su ID (GET /recetas/:id).
// app.get("/recetas/:id", async (req, res) => {
//   //Obtener el id: url params
//   const idReceta = req.params.id;

//   if (isNaN(parseInt(idReceta))) {
//     res.json({
//       success: false,
//       error: "El id debe ser un número",
//     });
//     return;
//   }

//   //Select a la bases de datos con un id
//   let query = "SELECT * FROM recetas WHERE id = ?";

//   //hacer la conexión con la BD
//   const conn = await getConnection();

//   //Ejecutar esa consulta
//   const [results] = await conn.query(query, [idReceta]);
//   const numOfElements = results.length;

//   if (numOfElements === 0) {
//     res.json({
//       success: true,
//       message: "No existe la receta que buscas",
//     });
//     return;
//   }

//   //Enviar una respuesta
//   res.json({
//     results: results[0], // listado
//   });
// });

//Crear una nuevo libro (POST )
app.post("/Library", async (req, res) => {
  const bookData = req.body; //objeto
  const { titulo, autor, descripción, genero, paginas } = bookData;

  //Validaciones
  //Validar que viene el nombre, ingredientes y las instrucciones -- res.json(error)

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
