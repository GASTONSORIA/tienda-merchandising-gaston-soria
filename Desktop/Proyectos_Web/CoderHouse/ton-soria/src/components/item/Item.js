// Item.js es un componente para informacion breve del producto




export default function Item({id, title, price, pictureUrl}) {

    return (
        <div>
            
            <img src={pictureUrl} alt="" />
            <h2>{title}</h2>
            <h3>{price}</h3>
            
        </div>
    );
} 