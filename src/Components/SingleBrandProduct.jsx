import { Link } from "react-router-dom";
import Swal from "sweetalert2";



const SingleBrandProduct = ({ product }) => {
    const { _id, name, brandName, imageURL, type, price, deletedPrice, rating } = product;

    const handleDeleteProduct = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/products/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount === 1) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Item deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }
    return (
        <div className="card card-compact w-full text-black shadow-xl">
            <figure><img src={imageURL} className="h-40 w-full" /></figure>
            <div className="card-body relative">
                <h2 className="card-title">{name} <button onClick={() => handleDeleteProduct(_id)} className="btn btn-sm bg-white text-red-500 border-none">X</button></h2>
                <div className="my-2">
                    <p> <small>Brand: {brandName}</small></p>
                    <p><small>Type: {type}</small></p>
                </div>
                <div className="mb-10">
                    <div className="flex justify-start">
                        <p className="font-bold">{price}</p>
                        <p className="text-red-500"><del>{deletedPrice}</del></p>
                    </div>
                    <p>Rating: {rating} <span className="text-yellow-500">&#9733;</span></p>
                </div>
                <div className="card-actions absolute bottom-3">
                    <Link to={`/brand/${brandName}/${_id}`}>
                        <button className="btn btn-sm btn-neutral">Details</button>
                    </Link>
                    <Link to={`/update-product-data/${_id}`}>
                        <button className="btn btn-sm btn-neutral">Update</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleBrandProduct;