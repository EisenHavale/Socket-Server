/* 
* Basically this section is about sockets and how useful are they
!They are used to notify clients any change happened on the server cause, server itself doesn´t know how to
*/
const Server = require('./models/server')
const main = () =>{
    const server = new Server();
    server.listen();
}

main();