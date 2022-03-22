import React, { useState } from "react";
import GroceryList from "./GroceryList";


function GroceryInput() {
    const [item, setItem] = useState("")
    const [data, setData] = useState([])

    return(
    <>
        <input id="grocery" type="text" defaultValue={item} onChange={(e)=>{setItem(e.target.value)}} />
        <button  onClick={()=>{setData([...data, item]); console.log(data, "data");}} >add item</button>
        <GroceryList data ={data} />
    </>
)
}

export default GroceryInput