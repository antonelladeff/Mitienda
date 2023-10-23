import { useState } from 'react'
import { useEffect } from 'react'
import { Spin } from 'antd';
import Item from "../Item/item";
import "./ItemListContainer.css"
import { useParams } from "react-router-dom";

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
        <div className={loading ? "spinner" : "container-list"}>
            {loading ? (
                <Spin />
            ) : (
                products && products.length > 0 ? (
                    products.map((prod) => <Item key={prod.id} product={prod} />)
                ) : (
                    <p>No hay productos disponibles en esta categoría.</p>
                )
            )}
        </div>
    );

}
export default ItemListContainer;
