import "./Item.css";

const Item = ({ data }) => {
  const { title, description } = data;

  return (
    <article>
      <h4>{title || "--"}</h4>
      <p>{description || "--"}</p>
    </article>
  );
};

export default Item;
