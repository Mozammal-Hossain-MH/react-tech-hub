
import { toast } from "react-toastify";

const cartProduct = ({cartProduct, cartProducts, setCartProducts}) => {

    const {imageURL, name, price, quantity, id} = cartProduct;
    const pricenum = parseFloat(price.replace(/,/g, ''));
    const totalPrice = pricenum * quantity;
    const formattedTotal = new Intl.NumberFormat().format(totalPrice);

    const handleDelete = id => {
        fetch(`https://react-tech-hub-server.onrender.com/cart-products/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount === 1){
                toast('Deleted successfully');
                const remaining = cartProducts.filter(cp => cp.id !== id)
                setCartProducts(remaining);
            }
        })
    }

    return (
        <>
            <tr >
                <td><img className="w-20" src={imageURL} alt="" /></td>
                <td>{name}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>{formattedTotal}</td>
                <td><button onClick={() => handleDelete(id)} className="text-red-500">X</button></td>
            </tr>
        </>
    );
};

export default cartProduct;