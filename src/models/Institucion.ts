/* ● Alejandro.lopez.garcia: 
 Formulario para añadir una ​institución​:
 ​nombre de la institución ​(por ejemplo           Hospital clínic), 
 descripción. Url,​ responsable de la institución
  
 Listado de ​instituciones 
  Edición de una ​institución */
  import {Schema,model} from 'mongoose';

const InstitucionSchema = new Schema({
    nombre:{type: String, required:true, unique:true},
    descripcion:String,
    url: String,
    responsable:{type:String , required:true}
})

export default model('Institucion',InstitucionSchema);