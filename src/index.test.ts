//importat las bibliotecas 

import {Request} from 'supertest'
import App from './Router'
import { request } from 'http'

describe(
	'GET /',
	()=>{
        
		let app:App

		beforeAll(
			()=>{
				app= new App()
				app.start
			}
		)
        
		afterAll(
			app.close
		)

		test(
			'Debe devolver un mensaje',
			async ()=>{
				const res = await request(app.app).get('./') 
				expect(res.statusCode).toEqual(200)
				expect(res.test).toEqual('Bienvenidos a typescript')     
			}
		)

	}

)