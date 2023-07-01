//1. importar la biblioteca de trabajo 

import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions={
    //poner variables de configuracion
    definitions:{
        openapi:"3.0.0",
        info:{
            title:"API de la IPS AteneaIPS",
            version:"1.0",
            description:"En esta API tenemos la funcionalidad de soportar la operacion de la IPS Atenea IPS"
        },
        //servidor donde se va a publicar la documentación
        servers:[
            {
                URL:"http:localhost:3000",
                description:"Servidor local de documentación"
            }
        ]

    },
    //referenciar donde vamos a encontrar a swagger
    apis:["src/index.ts","./swagger/*.swagger.ts"]

}