import { Router, Response, Request } from 'express'
import PacienteController from '../controllers/PacienteController'



class PacienteRouter{

	router:Router
	pacienteContriller:PacienteController

	constructor(){

		this.router= Router()
		this.pacienteContriller= new PacienteController()
		this.routes()

	}

	private routes():void{
		//listar pacientes
		this.router.get(
			'/pacientes',
			(req:Request, res:Response)=>{
				this.pacienteContriller.obtenerPacientes(req, res)
			}
		)
		//crear pacientes
		this.router.post(
			'/crear_paciente',
			(req:Request, res:Response)=>{
				this.pacienteContriller.CrearPaciente(req, res)
			}

		)
	}
}

export default PacienteRouter