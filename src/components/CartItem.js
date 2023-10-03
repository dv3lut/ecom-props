import './CartItem.css'
import { useContext } from "react";
import { Context } from "./Context";

function CartItem({product, quantity}) {
    const { removeProductFromCart } = useContext(Context);
    const handleRemoveButton = () => {
        removeProductFromCart(product);
    }
    return (
        <li className="cart-item" key={product.id}>
            <img src={product.image} alt={product.title} />
            <div className="cart-item-info">
                <h3 className="cart-item-title">{product.title}</h3>
                <h3 className="cart-item-category">{product.category.toUpperCase()}</h3>
                <p className="cart-item-quantity">Quantité : {quantity}</p>
                <p className="cart-item-price">{product.price} €</p>
                <button className="btn-cart-remove" onClick={handleRemoveButton}>
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </li>
    )
}

export default CartItem;