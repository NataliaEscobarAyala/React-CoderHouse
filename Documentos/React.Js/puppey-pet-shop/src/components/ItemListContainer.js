import React, { useState } from "react";
import ItemCount from "../ItemCount";

function ItemListContainer() {

  return (
 
   <div className="ItemListContainer">
 
     <ItemCount stock={5} initial={1} onAdd={(count) => console.log(count)} />
 
   </div>
 
  );
 
}
export default ItemListContainer;