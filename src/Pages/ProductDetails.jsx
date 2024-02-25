import { useLoaderData } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { toast } from "react-toastify";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useEffect, useState } from "react";



const ProductDetails = () => {
    const product = useLoaderData();
    const [quantity, setQuantity] = useState(1);
    const [loadedCartProducts, setLoadedCartProducts] = useState([]);

    useEffect(() => {
        fetch('https://react-tech-hub-server.onrender.com/cart-products')
            .then(res => res.json())
            .then(data => setLoadedCartProducts(data))
    }, [])

    const { _id, name, brandName, description, imageURL, price, deletedPrice, rating } = product;
    const cart = { id: _id, name, quantity, imageURL, price }

    const handleAddToCart = id => {
        const exist = loadedCartProducts.find(lcProduct => lcProduct.id === id);

        if (exist) {
            toast('Product already added');
        }
        else {
            fetch('https://react-tech-hub-server.onrender.com/cart-products', {
                method: 'POST',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(cart)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {
                        toast('Product added to cart successfully')
                    }
                })
        }

    }

    const handleAddQuantity = () => {
        setQuantity(quantity + 1);
    }

    const handleDownQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
        else {
            setQuantity(quantity);
        }
    }


    return (
        <div className="max-w-6xl mx-auto my-20 grid md:grid-cols-3 gap-6 text-slate-600">
            <div className="block mx-auto">
                <img src={imageURL} />
            </div>
            <div className="col-span-2 mx-3">
                <div className="border-b">
                    <h1 className="text-2xl font-bold mb-2 text-slate-800">{name}</h1>
                    <div className="flex mb-3">
                        <p className="mr-5"><span className="font-semibold">Brand:</span> {brandName}</p>
                        <p><span className="font-semibold">Rating:</span> {rating} <span className="text-yellow-500">&#9733;</span></p>
                    </div>
                </div>
                <div className="flex items-center py-3">
                    <p className="mr-5">{price} &#2547;</p>
                    <p className="text-red-500 mr-6"><del>{deletedPrice}</del></p>
                </div>
                <div className="flex items-center border-b pb-3">
                    <div className="mr-3 flex items-center">
                        <p className="font-bold">Quantity:</p>
                        <FaMinus onClick={handleDownQuantity} className="mx-2" />
                        <p>{quantity}</p>
                        <FaPlus onClick={handleAddQuantity} className="mx-2" />
                    </div>
                    <button onClick={() => handleAddToCart(_id)} className="flex btn btn-sm text-white"><IoMdCart className="w-6 h-6"></IoMdCart><span>Add To Cart</span></button>
                </div>
                <p className="my-5">{description}</p>
            </div>
        </div>
    );
};

export default ProductDetails;