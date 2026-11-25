import { useState } from "react";
import "./Main.css";
import List from "./List";
import tareasIniciales from "../../data/tasks.json"

const Main = () => {
  const [tareas, setTareas] = useState(tareasIniciales);

  return (
    <main>
      <button onClick={() => {
        setTareas([])
      }}>CLEAR</button> 

      <button onClick={() => {
        setTareas(tareasIniciales)
      }}>RESET</button> 

      <List tareas={tareas} />
    </main>
  );
};

export default Main;
