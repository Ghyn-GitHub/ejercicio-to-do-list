import "./List.css";
import Item from "./Item";

const List = ({ tareas, deleteTask }) => {
  return (
    <ul>
      {tareas.map((tarea) => <li key={tarea.id}><Item data={tarea} deleteTask={deleteTask} /></li>)}
    </ul>
  );
};

export default List;
