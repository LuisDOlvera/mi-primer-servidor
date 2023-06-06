const express = require("express");
const server = express();
const fsPromises = require("fs/promises");

/*
    app de express ->
    1.- Ruta
    2.- Callback
        1.-Response
        2.-Request
*/

server.get("/hola", (request, response) => {
    response.write("Estamos en Home");
    response.end();
});

//Método POST
server.post("/hola", (request, response) => {
    response.write("Estamos en Home en el método POST");
    response.end();
});

//Método DELETE
server.delete("/hola", (request, response) => {
    response.write("Estamos en Home en el método DELETE");
    response.end();
});

//Método PATCH
server.patch("/hola", (request, response) => {
    response.write("Estamos en Home en el método PATCH");
    response.end();
});



//Prender el Servidor (lo vamos a "escuchar")
server.listen(8080, () => {
    console.log("Nuestro servidor está prendido!!");
});

//hacwer un endpoint que lea un archivo y nos lo responda.
server.get("/archivo", async (request, response) => {
    const data = await fsPromises.readFile("./archivo_a_leer.txt", "utf-8")
    response.send(data)
});



/*
*3 endpioints en la ruta /hola ->[POST, DELETE PATCH]

*/


