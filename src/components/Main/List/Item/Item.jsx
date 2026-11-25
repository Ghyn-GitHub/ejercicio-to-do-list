import "./Item.css";

const Item = ({ data, deleteTask }) => {
  const { id, title, description } = data;

  return (
    <article className="item">
      <div className="item-content">
        <h4>{title || "--"}</h4>
        <p>{description || "--"}</p>
      </div>
      <button className="btn btn-danger" onClick={() => deleteTask(id)}>
        BORRAR
      </button>
    </article>
  );
};

export default Item;
