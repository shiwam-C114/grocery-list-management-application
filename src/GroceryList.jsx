import React from "react";

function GroceryList(props) {

  function dlt(delMe) {
    props.updataData(props.data.filter(ele => ele !== delMe) )
  }

  console.log("inide GL", props.data);
  return (
    <div>
      GroceryList
      <div>
        {props.data.map((ele) =><div>{ele} <button onClick={()=>{dlt(ele)}} >delete</button> </div> )}
      </div>
    </div>
  );
}

export default GroceryList;
