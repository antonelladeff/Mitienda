import ItemCount from "./ItemCount";

const ItemDetail = ({ product, loading }) => {

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
                                <ItemCount />
                                <button className="add-to-cart-button">Añadir al carrito</button>
                            </div>
                        </>
                    ) : (
                        <p className="error-message">El producto no existe.</p>
                    )}
                </div>
            )}
        </div>
    )

};


export default ItemDetail