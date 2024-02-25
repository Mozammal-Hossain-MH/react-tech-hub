import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProductData = () => {
    const params = useParams();
    const products = useLoaderData();
    const updatedProduct = products.find(product => product._id === params.id);
    console.log(updatedProduct);

    const { _id, name, brandName, type, imageURL, price, deletedPrice, rating, description } = updatedProduct

    const handleUpdateGadgets = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const brandName = form.get('brandName');
        const type = form.get('type');
        const imageURL = form.get('imageURL');
        const price = form.get('price');
        const deletedPrice = form.get('deletedPrice');
        const rating = form.get('rating');
        const description = form.get('description');
        const gadget = { name, brandName, type, imageURL, price, deletedPrice, rating, description };

        fetch(`https://react-tech-hub-server.onrender.com/products/${_id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(gadget)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount === 1){
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Gadget Modified successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div>
            <div className="max-w-3xl mx-auto my-20 text-black">
                <p className="text-2xl font-bold text-center py-5">Update Gadget</p>
                <p className="text-center">Introducing the Ultimate Mobility Bundle: Seamlessly combining the power of mobile devices, laptops, and Bluetooth technology for unparalleled convenience on the go. Our sleek mobile device offers vibrant displays and long battery life, while our premium laptop ensures productivity with lightning-fast performance. Pair effortlessly with our state-of-the-art Bluetooth technology for seamless connectivity between devices. From work to entertainment, stay connected and productive wherever life takes you. Experience the future of mobility with the Ultimate Mobility Bundle.</p>
                <form onSubmit={handleUpdateGadgets} className="my-10">
                    <div className="flex justify-center">
                        <div className="sm:flex justify-center">
                            <div className="form-control sm:mr-5 mb-2">
                                <label className=" gap-2 sm:mr-5 mb-2 w-72">
                                    <span className="font-bold">Name <span className="text-red-600">*</span></span>
                                </label>
                                <input type="text" defaultValue={name} autoComplete="off" className="grow input input-bordered text-white" name="name" placeholder="Device Name" required />
                            </div>
                            <div className="form-control mb-2">
                                <label className=" gap-2 sm:mr-5 mb-2 w-72">
                                    <span className="font-bold">Brand Name {'(First letter capital)'} <span className="text-red-600">*</span></span>
                                </label>
                                <input type="text" defaultValue={brandName} className="grow input input-bordered text-white" name="brandName" placeholder="Brand Name" required />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="sm:flex justify-center">
                            <div className="form-control sm:mr-5 mb-2">
                                <label className=" gap-2 sm:mr-5 mb-2 w-72">
                                    <span className="font-bold">Type{'(Phone, Laptop, Headphone)'}<span className="text-red-600">*</span></span>
                                </label>
                                <input type="text" defaultValue={type} className="grow input input-bordered text-white" name="type" placeholder="Gadget Type" required />
                            </div>
                            <div className="form-control mb-2">
                                <label className=" gap-2 sm:mr-5 mb-2 w-72">
                                    <span className="font-bold">ImageURL <span className="text-red-600">*</span></span>
                                </label>
                                <input type="text" defaultValue={imageURL} autoComplete="off" className="grow input input-bordered text-white" name="imageURL" placeholder="Url" required />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="sm:flex justify-center">
                            <div className="form-control sm:mr-5 mb-2">
                                <label className=" gap-2 sm:mr-5 mb-2 w-72">
                                    <span className="font-bold">Price <span className="text-red-600">*</span></span>
                                </label>
                                <input type="text" defaultValue={price} autoComplete="off" className="grow input input-bordered text-white" name="price" placeholder="Price" required />
                            </div>
                            <div className="form-control mb-2">
                                <label className=" gap-2 sm:mr-5 mb-2 w-72">
                                    <span className="font-bold">Actual Price <span className="text-green-600">{'(optional)'}</span></span>
                                </label>
                                <input type="text" defaultValue={deletedPrice} autoComplete="off" className="grow input input-bordered text-white" name="deletedPrice" placeholder="Deleted price" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="sm:flex justify-center">
                            <div className="form-control sm:mr-5 mb-2">
                                <label className=" gap-2 sm:mr-5 mb-2 w-72">
                                    <span className="font-bold">Rating <span className="text-red-600">*</span></span>
                                </label>
                                <input type="text" defaultValue={rating} className="grow input input-bordered text-white" name="rating" placeholder="Rating" required />
                            </div>
                            <div className="form-control mb-2">
                                <label className=" gap-2 sm:mr-5 mb-2 w-72">
                                    <span className="font-bold">Description <span className="text-red-600">*</span></span>
                                </label>
                                <input type="text" defaultValue={description} autoComplete="off" className="grow input input-bordered text-white" name="description" placeholder="Something about product" required />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <input type="submit" value="Modify Gadget" className="btn btn-neutral w-72 my-5" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProductData;