import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ItemDetailContainer.css';
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const { id } = useParams()
    const [product, setProducto] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                setProducto(json)
            })
            .catch(error => console.error(error))
            .finally(() => setLoading(false))

    }, [id])


    return (
        <ItemDetail product={product} loading={loading} />
    );
};

export default ItemDetailContainer;