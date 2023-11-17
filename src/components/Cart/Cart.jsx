import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import './Cart.css';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { cart, totalPrice, emptyCart, setCart } = useContext(CartContext);

    const handleEmptyCart = () => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "¿Deseas vaciar el carrito?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, vaciar carrito",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                emptyCart();
                Swal.fire("El carrito ha sido vaciado.", "", "success");
            }
        });
    };

    const onUpdateQuantity = (item, newQuantity) => {
        setCart((prevCart) => {
            return prevCart.map((cartItem) =>
                cartItem === item ? { ...cartItem, quantity: newQuantity } : cartItem
            );
        });
    };

    return (
        <div className="car">
            <h1 className="">Detalle de la compra</h1>
            <div className="productos enteros">
                {cart.map((item) => (
                    <CartItem key={item.id} item={item} onUpdateQuantity={onUpdateQuantity} />
                ))}
            </div>
            {cart.length > 0 ? (
                <>
                    <h2 className="precio-total">Precio total: ${totalPrice()}</h2>
                    <div className="contenedor-botones">
                        <button className="button-vaciar" onClick={handleEmptyCart}>Vaciar carrito</button>
                        <Link className="link-finalizar" to="/checkout">Finalizar compra</Link>
                    </div>
                </>
            ) : (
                <h2 className="empty-cart-message">El carrito está vacío</h2>
            )}
        </div>
    );
};

export default Cart;
