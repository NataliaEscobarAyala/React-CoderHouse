import ItemCount from "./ItemCount";
import React, { useState } from "react";


function ItemListContainer() {

  return (
 
   <div className="ItemListContainer">
 
     <ItemCount stock={5} initial={1} onAdd={(count) => console.log(count)} />
 
   </div>
 
  );
 
}
export default ItemListContainer;