import { useContext } from 'react';
import './Cart.css'
import { Context } from './Context';
import CartItem from './CartItem';

function Cart() {
    const { cartData } = useContext(Context);

    const groupedProducts = cartData.reduce((acc, product) => {
        if (!acc[product.id]) {
            acc[product.id] = { ...product, quantity: 0 };
        }
        acc[product.id].quantity += 1;
        return acc;
    }, {});

    const sumAndRoundProducts = (sum, product) => {
        return Math.round((sum + product.price) * 100) / 100;
    }


    return (
        <div className="cart">
            <h3>- Panier en cours -</h3>
            <ul className="cart-list">
                {
                    Object.values(groupedProducts).map(product => (
                        <CartItem key={product.id} product={product} quantity={product.quantity} />
                    ))
                }
                <li className="cart-item">Total : {cartData.reduce(sumAndRoundProducts, 0)} €</li>
            </ul>
        </div>
    );
}

export default Cart;