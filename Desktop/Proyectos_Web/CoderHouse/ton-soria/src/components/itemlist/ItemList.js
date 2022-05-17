// el componente ItemList.js va a recibir una prop y va a mapear estos items al componente <item .../>
import Item from "./Item";


export default function ItemList({items, id}) {

    return (
        <div>
            {id? 
                items.filter(el => el.categoria === id).map((el) => <Item key={el.id} el={el}/>)
                    :items.map((el) => <Item key={el.id} el={el}/>)
            }
        </div>
    );
}