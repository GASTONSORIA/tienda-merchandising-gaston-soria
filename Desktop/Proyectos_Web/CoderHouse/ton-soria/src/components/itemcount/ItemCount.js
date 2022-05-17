import { useState } from 'react';
import { Link } from "react-router-dom";


export default function ItemCount({id, initial, stock, onAdd}) {
    const [quantity, setQuantity] = useState(initial);

    function increase() {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        } 
    }

    function decrease() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        } 
    }

    function addToCart() {
        onAdd(quantity);
    }

    return (
        <div>
            <button id='less'  onClick={decrease}>-</button>
            <span>{quantity}</span>
            <button id='plus' onClick={increase}>+</button>
            <Link to={`/itemDetail/${id}`}>
                <button  onClick={addToCart}>CARRITO</button>
            </Link>
        </div>
    );
}