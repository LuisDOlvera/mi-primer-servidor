//"Requerir el protocolo http"
const http = require("http");

/* 
Endpoint ->
Conformado por 2 cosas, por el método y la ruta.
 * method -> [GET, PATCH, etc..]
 * Por la Ruta -> /, /kodemia, /post

*/

//Crear el Servidor (Declarando el Servidor)
const server = http.createServer((request, response) =>{
    //Leer la request
    // console.log("request headers", request.headers);
    // console.log("method", request.method); //Obtener (imprimir) el método
    // console.log("url", request.url); //Imprimimos la URL

    const { url, method } = request;
    //1er. endpoint de GET en hola
    if(method === "GET" && url === "/hola") {
        response.write("Estamos en endpoint de GET en hola");
    }
    //2do. endpoint GET en adios
    if(method === "GET" && url === "/adios") {
        response.write("Estamos en endpoint de GET en adios");
    }
    //1er. endpoit de POST en hola
    if(method === "POST" && url === "/hola"){
        response.write("Estamos CREANDO algo en hola");
    }
    //2do. endpoint de POST en adios
    if(method === "POST" && url === "/adios"){
        response.write("Estamos CREANDO algo en adios");
    }
    //1er. endpoint de PUT en adios
    if(method === "PUT" && url === "/hola"){
        response.write("Estamos REEMPLAZANDO algo en hola");
    }
    //2do. endpoint de PUT en adios
    if(method === "PUT" && url === "/adios"){
        response.write("Estamos REEMPLAZANDO algo en adios");
    }
    //1er. endpoint de Patch en hola
    if(method === "PATCH" && url === "/hola"){
        response.write("Estamos AGREGANDO algo en hola");
    }
    //2do. endpoint de Patch en adios
    if(method === "PATCH" && url === "/adios"){
        response.write("Estamos AGREGANDO algo en adios");
    }
    //1er. endpoint de Delete en hola
    if(method === "DELETE" && url === "/hola"){
        response.write("Estamos ELIMINANDO algo en hola");
    }
    //2do. endpoint de Delete en adios
    if(method === "DELETE" && url === "/adios"){
        response.write("Estamos ELIMINANDO algo en adios");
    }

    //Responder
    response.end() //Indicar cuando la respuesta terminó
})

//Prender el Servidor (lo vamos a "escuchar")
server.listen(8080, () => {
    console.log("Nuestro servidor está prendido!!");
})