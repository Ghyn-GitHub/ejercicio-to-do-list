import { useState } from "react";
import "./Main.css";
import List from "./List";
import tareasIniciales from "../../data/tasks.json"

const Main = () => {
  const [tareas, setTareas] = useState(tareasIniciales);

  return (
    <main>
      <List tareas={tareas} />
    </main>
  );
};

export default Main;
