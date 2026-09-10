import type { shoppingList} from "../types/shoppinglist.js";

let items:  shoppingList[] = [];
let currentId =1 ;
//Add an item in list 

//Retrieve all the items form the List
export const getAllItems =() : shoppingList[] => {
return items;
}

export const addItem= (itemName: string, description : string, quantity: number, category: string)=>{

  const  newItem : shoppingList = {id : currentId++, itemName,description,quantity,category}
   items.push(newItem)
   return newItem
}

//Get a single item by id
export const getItem = (id: number) : shoppingList | undefined =>{ 
     const item = items.find((item) => item.id=== id)
     return item;
}
//Delete an item 
export const deleteItem =(id: number) : shoppingList[]=>{

    items = items.filter((ItemList) => ItemList.id!== id);
    return items;
}
// uUpdate an item
export const updateItem = (id: number, itemName: string, description: string, quantity: number, category: string) : shoppingList| undefined => {
    const item = items.find((item) => item.id === id);
    if(item){
        item.itemName=itemName;
        item.description=description;
        item.quantity=quantity;
        item.category=  category;
    }
    return item;
}









