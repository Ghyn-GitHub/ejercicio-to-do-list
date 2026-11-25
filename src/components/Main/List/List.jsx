import { v4 as uuidv4 } from 'uuid'
import "./List.css";
import Item from "./Item";

const tareas = [
  {id: uuidv4(), title: "Tarea 1", description: "Lavar la ropa"},
  {id: uuidv4(), title: "Tarea 2", description: "Limpiar la casa"},
  {id: uuidv4(), title: "Tarea 3", description: "Preparar la comida"}
]

const List = () => {
  return (
    <ul>
      {tareas.map((tarea) => <li key={tarea.id}><Item data={tarea} /></li>)}
    </ul>
  );
};

export default List;
