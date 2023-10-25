import { Spin } from 'antd';
import Item from "./item";

const ItemList = ({ products, loading }) => {
    return (
        <div className={loading ? "spinner" : "container-list"}>
            {loading ? (
                <Spin />
            ) : (
                products && products.length > 0 ? (
                    products.map((prod) => <Item key={prod.id} product={prod} />)
                ) : (
                    <div className="no-products-container">
                        <p className="error-message">No hay producto disponible.</p>
                    </div>
                )
            )}
        </div>
    );
}



export default ItemList