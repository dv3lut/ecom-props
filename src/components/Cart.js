import { useContext } from 'react';
import './Cart.css'
import { Context } from './Context';

function Cart() {
    const { cartData } = useContext(Context);
    return (
        <div className="cart">
            <h2>- Votre panier en cours -</h2>
            <ul className="cart-list">
                {
                    cartData.length > 0 ? (cartData.map((product) => (
                        <li className="cart-item" key={product.id}>
                            <img src={product.image} alt={product.title} />
                            <div className="cart-item-info">
                                <h3 className="cart-item-title">{product.title}</h3>
                                <p className="cart-item-category">{product.category.toUpperCase()}</p>
                                <p className="cart-item-price">{product.price} €</p>
                            </div>
                        </li>
                    ))) : (<p>Votre panier est vide</p>)
                }
            </ul>
        </div>
    );
}

export default Cart;