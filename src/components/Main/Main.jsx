import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import "./Main.css";
import List from "./List";
import tareasIniciales from "../../data/tasks.json";

const Main = () => {
  const [tareas, setTareas] = useState(tareasIniciales);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  return (
    <main>
      <input
        onChange={(event) => setTaskTitle(event.target.value)}
        value={taskTitle}
        placeholder="Título de la tarea..."
      />

      <input
        onChange={(event) => setTaskDesc(event.target.value)}
        value={taskDesc}
        placeholder="Descripción de la tarea..."
      />

      <button
        onClick={() => {
          const newTask = {
            id: uuidv4(),
            title: taskTitle,
            description: taskDesc,
          };
          setTareas([newTask, ...tareas]);
          setTaskTitle("");
          setTaskDesc("");
        }}
      >
        ADD
      </button>

      <button
        onClick={() => {
          setTareas([]);
        }}
      >
        CLEAR
      </button>

      <button
        onClick={() => {
          setTareas(tareasIniciales);
        }}
      >
        RESET
      </button>

      <List tareas={tareas} />
    </main>
  );
};

export default Main;
