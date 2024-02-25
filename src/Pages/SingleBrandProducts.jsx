import { useLoaderData, useParams } from "react-router-dom";
import Slider from "../Components/Slider/Slider";
import SingleBrandProduct from "../Components/SingleBrandProduct";


const SingleBrandProducts = () => {
    const products = useLoaderData();
    const params = useParams();


    return (
        <div className="max-w-6xl mx-auto ">
            <Slider></Slider>
            <h1 className="text-4xl font-bold text-black my-10 mx-3">{params.brandName}</h1>
            {
                products.length > 0 ?
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mx-3 mb-20">
                        {
                            products.map(product => <SingleBrandProduct
                                key={product._id}
                                product={product}
                            ></SingleBrandProduct>)
                        }
                    </div>
                    : <div className="flex items-center justify-center  h-32">
                        <p className="font-bold text-red-500 mx-3 text-center">Sorry! we {"don't"} have any {params.brandName} products available right now.</p>
                    </div>
            }
        </div>
    );
};

export default SingleBrandProducts;