import http ,{IncomingMessage, ServerResponse} from 'http'
//import {shoppinglist} from '../src/routes/shoppinglist.js'
const PORT= 3000;

const requestListener=( request: IncomingMessage, response: ServerResponse) => {

    if(request.url?.startsWith("/shoppingList")){
        // there must be something here
    }
    else{
        response.writeHead(200, {"content-type": "application/json"})
        response.end(JSON.stringify({message : "Hello World"}))
    }
}

 const server = http.createServer(requestListener);

 server.listen(PORT, () => {console.log(`Server is running on http://localhost: ${PORT}`)})