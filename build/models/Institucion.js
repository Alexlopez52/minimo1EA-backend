"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* ● Alejandro.lopez.garcia:
 Formulario para añadir una ​institución​:
  ​nombre de la institución ​(por ejemplo           Hospital clínic),
 descripción. Url,​ responsable de la institución
  
 Listado de ​instituciones
  Edición de una ​institución */
var mongoose_1 = require("mongoose");
var InstitucionSchema = new mongoose_1.Schema({
    nombre: { type: String, required: true, unique: true },
    descripcion: String,
    url: String,
    responsable: { type: String, required: true }
});
exports.default = mongoose_1.model('Institucion', InstitucionSchema);
