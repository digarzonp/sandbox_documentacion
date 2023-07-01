import express,{Application, Request, Response} from 'express'

class App{

//atriburos 

    public app: any   // para representar una api express
    private server:any  //vamos a utilizar para representar el servidor que se ejecuta cuando llamamos a la funcion lisen

    constructor(){
        this.app=express()
        this.app.use(express.json())
        this.routes()  // estamos llamando al metodo routes
    }

    private routes():void{  // no nos devuelve nada habre la ruta , definir la ruta 
        this.server= this.app.get(
            "/",
            (req:Request,  res:Response)=>{
                res.send("Bienvenidos a typescript")
            }
        )

    }


    public start():void{  // abre un puerto en el servidor para enpezar a escuchar peticiones  en el puerto 3000, cuando empiez a funcionar ejecuta la funcion de colback
        this.server = this.app.listen(
            3001,
            ()=>{console.log("El servidor esta escuchando en el puerto 3001")}

        )

    }

    public close():void{ // cerra el servidor
        this.server.close()
    }

}
// crear un modulo 
export default App