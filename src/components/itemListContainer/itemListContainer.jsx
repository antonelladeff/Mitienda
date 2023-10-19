import { useEffect, useState } from "react";
import { Spin } from 'antd';
import Item from "../Item/item";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
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
                console.log(json);
                setProducts(json);
                setLoading(false);
            })
            .catch((error) => console.error(error));
        console.log(id)
    }, [id]);

    return (
        <div>
            <h2 className="saludo">{greeting}</h2>
            {loading ? (
                <Spin />
            ) : (
                products.map((prod) => <Item key={prod.id} producto={prod} />)
            )}
        </div>
    );
};

export default ItemListContainer;
