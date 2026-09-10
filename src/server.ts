import http ,{IncomingMessage, ServerResponse} from 'http'
import {listRoute} from '../src/routes/shoppinglist.js'


const PORT= 4000;

const requestListener=( request: IncomingMessage, response: ServerResponse) => {

    if(request.url?.startsWith("/ItemList")){
        listRoute(request,response);
    }
    else{
        response.writeHead(200, {"content-type": "application/json"})
        response.end(JSON.stringify({message : "Hello Vutlhari, You successfully ran the server , I am so proud of you!"}))
    }
}

 const server = http.createServer(requestListener);
 server.listen(PORT, () => {console.log(`Server is running on http://localhost: ${PORT}`)})