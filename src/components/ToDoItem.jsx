// import React from "react";

// function addItem (props){

// }

// export default ToDoItem;

import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);

  function underLine() {
    if (isDone === false) {
      setIsDone(true);
    } else if (isDone === true) {
      setIsDone(false);
    }
    // setIsDone(prev => {
    //   return !prev;
    // });
  }

  return (
    <div>
      <li
        onClick={underLine}
        style={{ textDecoration: isDone ? "line-through" : "none" }}
      >
        {props.text}
      </li>
      <button
        onClick={() => {
          props.onChecked(props.id);
        }}
        style={{
          width: "10%",
          height: "10%",
          marginLeft: "190px",
          position: "relative",
          bottom: "40px"
        }}
      >
        <span>X</span>
      </button>
    </div>
  );
}

export default ToDoItem;
