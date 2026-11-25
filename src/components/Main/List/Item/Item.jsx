import "./Item.css";

const Item = ({ data, deleteTask }) => {
  const { id, title, description } = data;

  return (
    <article>
      <h4>{title || "--"}</h4>
      <p>{description || "--"}</p>
      <button onClick={() => deleteTask(id)}>BORRAR</button>
    </article>
  );
};

export default Item;
