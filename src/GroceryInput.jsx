import React, { useState } from "react";
import GroceryList from "./GroceryList";


function GroceryInput() {
    const [item, setItem] = useState("")

    function handleClick() {
        console.log("handlecalled");
        <GroceryList name={item} / >
    }

    return(
    <>
        <input id="grocery" type="text" defaultValue={item} onChange={(e)=>{setItem(e.target.value)}} />
        <button  onClick={handleClick} >add item</button>
    </>
)
}

export default GroceryInput