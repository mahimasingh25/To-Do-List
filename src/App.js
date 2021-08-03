import "./styles.css";
import Header from "./components/Header";
import Form from "./components/Form";
import { useState } from "react";
import Tasks from "./components/Tasks";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task, index) => index !== id));
  };

  const handleDone = (id) => {
    setTasks(
      tasks.map((task, index) =>
        index === id ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <div>
      <h1 className="main">TO-DO LIST</h1>
      <div className="container">
        <img src={require("./pin.png")} alt="pin" />
        <Header />
        <Form onAdd={addTask} />
        {tasks.map((task, index) => {
          return (
            <Tasks
              id={index}
              text={task.text}
              done={task.done}
              key={index}
              handleClick={deleteTask}
              handleDone={handleDone}
            />
          );
        })}
      </div>
    </div>
  );
}
