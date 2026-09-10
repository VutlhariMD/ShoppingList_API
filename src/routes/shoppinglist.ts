import { IncomingMessage,ServerResponse } from "http";
import {addItem, getAllItems,getItem,deleteItem, updateItem} from '../controllers/shoppinglist.js'




export const listRoute = async (request : IncomingMessage, response: ServerResponse) => {
    //Splitting the  Route
if(request.url?.startsWith("/ItemList")){
    console.log(request.url, 'request url');

    const parts = request.url.split('/')
    console.log(parts, 'url parts')


const id = parts [2] ? parseInt(parts[2]) : undefined

if(request.method === 'GET' && !id){
    response.writeHead(200,{"content-type" : "application/json"})
    response.end(JSON.stringify(getAllItems()));
}



if (request.method ==='GET'  && id){

    /*const item =getItem(id);
    response.writeHead(200,{"content-type": "application/json"});
    response.end(item);*/


    if(isNaN(id)){
        response.writeHead(400,{"content-type" : "application/json"});
        response.end(JSON.stringify({error : "Invalid song id"}));
        return;
    }
    const item = getItem(id);
    if(!item){
        response.writeHead(404, {"content-type" : "application/json"});
        response.end(JSON.stringify({error: "Song not found"}))

    }
    



}
if(request.method === 'POST'){

    //a container to store incoming data
let body = "";
request.on( 'data', (chunk) => {
 body += chunk.toString();})

 request.on ('end', () => {

 const {itemName ,description, quantity, category} = JSON.parse(body);
 const newitem = addItem(itemName,description,quantity,category);
 response.writeHead(201, {"content-type" : "application-type"})
 response.end(JSON.stringify(newitem))
 }) 
 return;
}

if(request.method ==='DELETE' && id){
    deleteItem(id);
    response.writeHead(200)
    response.end("Item deleted Sucessfully");
}

if( request.method ==='PATCH' && id){

    let body = "";
    //convert data that comes along with the request and  then convert it to string and add it to the body variable
    request.on('data', (chunk) => {
        body += chunk.toString();
    });
    request.on ('end' ,
        ()=>{
          const {itemName ,description, quantity, category} = JSON.parse(body);
          const updatedItem =updateItem(id,itemName,description,quantity,category);
         

          if(!updatedItem){
            response.writeHead(404,{"content-type": "application/json"})
            response.end( JSON.stringify({error: "Item not found"}))
          }

          response.writeHead(200,{"content-type": "application/json"})
          response.end(JSON.stringify(updateItem));
        })}
}}