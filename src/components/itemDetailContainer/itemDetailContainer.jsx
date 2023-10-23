import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ItemDetailContainer.css';

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
        <div className="card-product-container">
            {loading ? (
                <p className="loading">Cargando...</p>
            ) : (
                <div className="product-detail-container">
                    {product ? (
                        <>
                            <h2 className="product-title">{product.title}</h2>
                            <div className="product-image">
                                {product.image && (
                                    <img src={product.image} alt={product.title} />
                                )}
                            </div>
                            <div className="product-description">
                                <p>{product.description}</p>
                                <p className="product-price">Precio: ${product.price} USD</p>
                                <button className="add-to-cart-button">Añadir al carrito</button>
                            </div>
                        </>
                    ) : (
                        <p className="error-message">El producto con el ID {id} no existe.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default ItemDetailContainer;