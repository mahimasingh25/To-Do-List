import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

const Tasks = (props) => {
  return (
    <div className="tasks">
      <div
        className={props.done ? "done" : ""}
        onClick={() => props.handleDone(props.id)}
      >
        {props.text}
      </div>
      <DeleteIcon onClick={() => props.handleClick(props.id)} />
    </div>
  );
};

export default Tasks;
