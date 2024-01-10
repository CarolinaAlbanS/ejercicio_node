// importar el módulo express js
const express = require("express");
// llamar al controlador de conexión a mongo
const mongoose = require("mongoose");

// definir el puerto que vamos a usar
const PORT = 3001;

// iniciar la funcionalidad de express js
const app = express();

const user = "carolinaalbansandoval";
const password = "6M7gLoypR6YnSTXn";

const DB_URL = `mongodb+srv://${user}:${password}@cluster0.g2rxohk.mongodb.net/?retryWrites=true&w=majority`;

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(DB_URL);
  console.log("bien");
}

// creamos peticiones rest
app.get("/", (request, response) => {
  response.send(
    `<h1>Buenos días</h1><p>Has recibido una respuesta del servidor</p>`
  );
});

app.listen(PORT, () => {
  console.log(`se ha iniciado el servidor en el puerto: ${PORT}`);
});
