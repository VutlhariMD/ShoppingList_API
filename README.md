# Shopping List Rest API

The  shopping List Api is  a backend application thta is built with  **Node.js**  and  **Typescript**.

The API allows users to manage the shopping list items by adding, viewing, updating  and deleting items.

The app run as  a HTTP server and can be tested using tools like **POSTMAN**

-----------------------------------------------------------------
## Use Case

Imagine you are preparing a shopping list before going to the store and your shopping list contain the following

* Milk
* Eggs
* Bread

As you shop you can 
* Add a new item to the list
* View all items
* Update  an item
* Mark the item as purchased
* Delete the item  if its no longer needed

## Technologies used

* Node.js
* Typescript
* HTTP
* Git & github
* Postman
-----------------------------------------------------------------------------
### Running the project
####  1. Clone the repository link
        
        git clone  <repository link> 
        git clone https://github.com/VutlhariMD/ShoppingList_API.git
#### 2. Install Dependencies
        npm install 
        
#### 3. Start  the server 
       npm run dev

######  The server should run  on 
http://localhost:3000

------------------------------------------------------------------------------
## Testing with Postman
Example requests: 

POST/PUT     http://localhost:5000/items
For `POST` and `PUT` requests, select:

```text
Body → raw → JSON
```

Then provide the JSON data  on the body workspace.

<img width="500" height="400" alt="image" src="https://github.com/user-attachments/assets/22b2ab4e-b03b-4a06-bb60-c6139a0ee36c" />

GET     http://localhost:5000/items/1

For GET requests, Add the above url and click send  :

<img width="500" height="400" alt="image" src="https://github.com/user-attachments/assets/b626f5c0-3164-4c54-a37e-18996719deca" />



DELETE  http://localhost:5000/items/1
For DELETE requests, Add the above url,
specify the id of the item you want to delete
and click send  :

<img width="500" height="400" alt="image" src="https://github.com/user-attachments/assets/190bf6f5-d2e2-4ff9-97fc-1dbcf32ae84a" />

----------------------------------------------------------------------------------------------------------------------------------
### Data Storage
The shopping list items are stored **in memory using an array of object***.
NB : The items stored in memory will be lost when the server is stopped or restarted.




     







  



                                                                                              


