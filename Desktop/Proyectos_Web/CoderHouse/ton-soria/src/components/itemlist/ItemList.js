// el componente ItemList.js va a recibir una prop y va a mapear estos items al componente <item .../>
import Item from "../item/Item";


function ItemList({items}) {
  return (
    <div>
        {items.map(el => <Item key={el.id} title={el.title} price={el.price} pictureUrl={el.pictureUrl}/>)}
    </div>
  )
}

export default ItemList