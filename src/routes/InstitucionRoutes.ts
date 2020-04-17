import {Request,Response,Router} from 'express';
import Institucion from '../models/Institucion'




class InstitucionRoutes {
router :Router;
    constructor(){
        this.router = Router();
        this.routes();
    }
    async getInstituciones(req :Request, res:Response){
       const Instituciones= await Institucion.find();
       res.json(Instituciones);

    }
    
    async createInstitucion(req :Request, res:Response){
      
        const newInstitucion = new Institucion(req.body)
        await newInstitucion.save();
        console.log(newInstitucion);
        res.json({data: newInstitucion});

    }
    
    async updateInstitucion(req :Request, res:Response){

         console.log(req.body);  
         const name = req.params.name;
         console.log(name); 
         const filter =  { nombre :name };
        const inst = await Institucion.findOneAndUpdate(filter,req.body,{new: true})
        console.log(inst);  
        res.json(inst)
 
    }
    routes(){
        this.router.get('/',this.getInstituciones);
        this.router.post('/',this.createInstitucion)
        this.router.put('/:name',this.updateInstitucion);
    }
}

const institucionRoute= new InstitucionRoutes();
export default institucionRoute.router;