import { Router, Response, Request } from 'express'
import PacienteController from '../controllers/PacienteController'



class PacienteRouter{

	router:Router
	pacienteController:PacienteController

	constructor(){

		this.router= Router()
		this.pacienteController= new PacienteController()
		this.routes()

	}

	private routes():void{
		//listar pacientes
		this.router.get(
			'/pacientes',
			(req:Request, res:Response)=>{
				this.pacienteController.obtenerPacientes(req, res)
			}
		)
		//crear pacientes
		this.router.post(
			'/crear_paciente',
			(req:Request, res:Response)=>{
				this.pacienteController.CrearPaciente(req, res)
			}

		)
	}
}

export default new PacienteRouter().router