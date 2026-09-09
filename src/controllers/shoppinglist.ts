import type { shoppingList} from "../types/shoppinglist.js";

let ItemList:  shoppingList [] = [];
let currentId =1 ;
//Add an item in list 

export const addItem= (itemName: string, description : string, quantity: number, category: string)=>{

  const  newItem : shoppingList = {id : currentId++, itemName,description,quantity,category}
   ItemList.push(newItem)
   return newItem
}

//Retrieve all the items form the List
export const getAllItems =() : shoppingList[] => {
return ItemList;
}
//Get a single item by id
export const getItem = (id: number) : shoppingList | undefined =>{ 
     const item = ItemList.find((item) => item.id=== id)
     return item;
}
//Delete an item 
export const deleteItem =(id: number) : shoppingList[]=>{

    ItemList = ItemList.filter((ItemList) => ItemList.id!== id);
    return ItemList;
}

export const updateItem = (id: number, itemName: string, description: string, quantity: number, category: string) : shoppingList| undefined => {
    const item = ItemList.find((item) => item.id === id);
    if(item){
        item.itemName=itemName;
        item.description=description;
        item.quantity=quantity;
        item.category=  category;
    }
    return item;
}









