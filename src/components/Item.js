const Item = ({item}) => {
    return (
       <div>
          <img src={item.img} alt={item.name} width="200px"/> 
          <div>
              <h3>{item.name}</h3>
              <h3>{item.price}</h3>
          </div>
       </div>
    )
}

export default Item;