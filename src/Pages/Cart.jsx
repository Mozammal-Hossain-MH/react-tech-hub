import { useState } from 'react';
import CartProduct from '../Components/CartProduct';
import { useLoaderData } from "react-router-dom";


const Cart = () => {
    const loadedCartProducts = useLoaderData();
    const [cartProducts, setCartProducts] = useState(loadedCartProducts);
    let total = 0;

    for(const product of cartProducts){
        const pricenum = parseFloat(product.price.replace(/,/g, ''));
        total = total + (pricenum * product.quantity);
    }
    const formattedTotal = new Intl.NumberFormat().format(total);

    return (
        <div className="text-black max-w-6xl mx-auto">
            <h1 className="text-center font-extrabold text-4xl my-6">Cart</h1>
            <div className="overflow-x-auto my-6">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartProducts.map(cartProduct => <CartProduct
                                key={cartProduct._id}
                                cartProduct={cartProduct}
                                cartProducts={cartProducts}
                                setCartProducts={setCartProducts}
                            ></CartProduct>)
                        }
                    </tbody>
                </table>
            </div>
            <div>
                <h1>Subtotal: {formattedTotal}</h1>
            </div>
        </div>
    );
};

export default Cart;