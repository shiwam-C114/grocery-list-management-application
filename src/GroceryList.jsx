import React from "react";

function GroceryList(props) {
  console.log("inide GL", props.data);
  return (
    <div>
      GroceryList
      <div>
        {props.data.map((ele) =><div>{ele}</div> )}
      </div>
      
      {/* <ul>
        {props.data.map((name) => (
          <li>{name}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default GroceryList;
