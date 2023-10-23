import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ItemDetailContainer.css';


const ItemDetailContainer = () => {
    const { id } = useParams();
    const [products, setProducto] = useState();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProducto(data);
            })
            .catch((error) => console.error(error));
    }, [id]);

    return (
        <div className="card-product-container">
            {products ? (
                <div className="product-detail-container">
                    <h2 className='product-title'>{products.title}</h2>
                    <div className='product-image'>
                        {products.image && (
                            <img
                                src={products.image}
                                alt=""
                            />
                        )}
                    </div>
                    <div className='product-description'>
                        <p>{products.description}</p>
                        <p className="product-price">Precio: ${products.price} USD</p>
                        <button className='add-to-cart-button'>Añadir al carrito</button>
                    </div>
                </div>
            ) : (
                <p className="loading">Cargando...</p>
            )}
        </div>
    );
}

export default ItemDetailContainer;
