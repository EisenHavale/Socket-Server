//*This section is to use the methods and configurations from socket.io

//*HTML references
const [active, inactive] = document.querySelectorAll('span');
const textMg = document.querySelector('#textMg');
const btnSend = document.querySelector('#btnSend');
const paragraph = document.querySelector('#showInfo');

const socket = io(); //!This section here use the html module. who exports this method 
//!and works only with frontend interactions, so everything I refresh the page it's showns
//* Then in this section We see the information from client interaction with the server, but in the model server,

//* We see the information for the server and at the server console only
//*Now That socket was created I can use it as a listener
socket.on('connect', ()=>{
    active.style.display='block';
    inactive.style.display='none';

})
//* As you can see the string parameter defined just before the callback is the command to listen.
//* Then the socket function look for that event
socket.on('disconnect', ()=>{
    inactive.style.display='block';
    active.style.display='none';
})
socket.on('send-msg', (payload)=>{
    const {msg} = payload;
    paragraph.textContent = msg;
    console.log(payload);

})

btnSend.addEventListener('click',()=>{
    const msg = textMg.value;
    const payload = {
        msg,
        id: socket.id, 
        date: new Date().getTime()
    }
    socket.emit('send-msg' ,payload, (id)=>{
        console.log("From server",id);
    });
})
