import "./List.css";
import Item from "./Item";
import tareas from "../../../data/tasks.json";

const List = () => {
  return (
    <ul>
      {tareas.map((tarea) => <li key={tarea.id}><Item data={tarea} /></li>)}
    </ul>
  );
};

export default List;
