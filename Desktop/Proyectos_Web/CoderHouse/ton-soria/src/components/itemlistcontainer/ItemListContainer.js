import ItemCount from "../itemcount/ItemCount";
import { useEffect, useState } from "react";
import ItemList from "../itemlist/ItemList"


const products = [
    {id:"1", title:"Remera", precio:"1200", pictureUrl:"https://thumbs.dreamstime.com/z/camisetas-anaranjadas-del-bosquejo-ejemplo-de-la-camiseta-ropa-dibujo-esquema-los-ni%C3%B1os-131434030.jpg"},
    {id:"2", title:"bolsa", precio:"500", pictureUrl:"https://thumbs.dreamstime.com/z/vector-de-icono-bolsa-ecol%C3%B3gica-vac%C3%ADa-ilustraci%C3%B3n-aislada-243881468.jpg"}
    
]



export default function ItemListContainer(greeting) {

    const getFetch = new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    })
    
        const [items,setItems] = useState([]);
        const [loader,setLoader] = useState(true);
    
    
        useEffect(() => {
                            getFetch
                            .then(res => setItems(res))
                            .catch(err => console.log(err))
                            .finally(() => setLoader(false))
                        },[]);
    
    

    console.log({greeting})
    return (
        <>
             {loader ? <h2>Cargando...</h2>: <ItemList items={items} />}
            
            <ItemCount stock="5" initial="1"/>
        </>
        
        )
}
