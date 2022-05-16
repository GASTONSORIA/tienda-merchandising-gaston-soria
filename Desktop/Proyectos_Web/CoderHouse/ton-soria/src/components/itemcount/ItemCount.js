import { useState } from 'react'

export default function ItemCount({ stock, initial, onAdd }) {
    
    const [cantidad, setCantidad] = useState(1)
    
     
    function sumarItem() {
        if(stock > cantidad) {
            setCantidad(cantidad + 1)
        }
    }

    function restarItem() {
        if(initial < cantidad) {
            setCantidad(cantidad - 1)
        }
    }

    function agregarCarrito() {
        if(stock > 0)
        onAdd = (cantidad)
        console.log(onAdd)
    }

    
    
    

  
    return (
    <>
        <button onClick={sumarItem}>+</button> <span>{cantidad}</span> <button onClick={(restarItem)}>-</button>
        <br/>   
        <button onClick={agregarCarrito}>Agregar al carrito</button>
        

    </>
  )
}
