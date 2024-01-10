const mongoose = require("mongoose");

const user = "carolinaalbansandoval";
const password = "6M7gLoypR6YnSTXn";

const mongoDb = `mongodb+srv://${user}:${password}@cluster0.g2rxohk.mongodb.net/?retryWrites=true&w=majority`;

const connect = async () => {
  try {
    const db = await mongoose.connect(mongoDb, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const { name, host } = db.connection;
    console.log(`Conectado a la DB : ${name} en el host: ${host}`);
  } catch (error) {
    console.error(`No se ha podido conectar a la DB `, error);
  }
};

module.exports = { connect };
