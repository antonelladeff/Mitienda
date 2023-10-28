import { useState } from 'react'
import { useEffect } from 'react'
import "./ItemListContainer.css"
import { useParams } from "react-router-dom";
import ItemList from './itemList'


const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()


    useEffect(() => {
        const url = id
            ? `https://fakestoreapi.com/products/category/${id}`
            : `https://fakestoreapi.com/products`;

        fetch(url)
            .then(res => res.json())
            .then(json => {
                setProducts(json)
                setLoading(false);
            })
            .catch((error) => console.error(error));

    }, [id]);

    return (
        <ItemList products={products} loading={loading} />

    );
}

export default ItemListContainer;