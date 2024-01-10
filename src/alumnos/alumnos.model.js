const mongoose = require("mongoose");

const alumnoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    apellito: { type: String, required: true, trim: true },
    curso: { type: String, required: true, trim: true },
    asignatura: [{ type: String, ref: "asignaturas", require: false }],
  },
  {
    timestamps: true,
  }
);

const Alumno = mongoose.model("alumnos", alumnoSchema);
module.exports = Alumno;
