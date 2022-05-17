import { useEffect, useState } from "react";
import ItemList from "./../../components/itemlist/ItemList"


export default function ItemListContainer({greeting}) {
    const [items,setItems] = useState([]);
    const [loader,setLoader] = useState(true);

    useEffect(() => {
        fetch("/data/data.json")
        .then(response => response.json())
        .then(data => setItems(data))
        .catch(err => console.log(err))
        .finally(() => setLoader(false))
    },[]);

    return (
        <div>
           
            {loader? <h2>Cargando...</h2>: <ItemDetail item={item}/>}
        </div>
    );
}
