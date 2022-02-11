import "./ItemList.css";
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <div className="item-list-container">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};
export default ItemList;
