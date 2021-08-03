import React, { useState } from "react";

const Form = (props) => {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!text) {
      alert("Please add a task");
      return;
    }

    props.onAdd({ text });

    setText("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        placeholder="Enter the task"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <input type="submit" value="Add" className="btn btn-block" />
    </form>
  );
};

export default Form;
