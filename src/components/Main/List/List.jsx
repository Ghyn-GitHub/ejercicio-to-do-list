import "./List.css";
import Item from "./Item";

const List = ({ tareas }) => {
  return (
    <ul>
      {tareas.map((tarea) => <li key={tarea.id}><Item data={tarea} /></li>)}
    </ul>
  );
};

export default List;
