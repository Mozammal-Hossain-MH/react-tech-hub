import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Brands = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch('https://react-tech-hub-server.onrender.com/brands')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])

    return (
        <div>
            <h1 className="my-6 text-red-500 text-xl font-bold">Click any brand below to see that brand products</h1>
            <div className=" grid grid-cols-3 sm:grid-cols-6 gap-4 mb-20">
                {
                    brands.map(brand =>
                        <Link
                            key={brand._id}
                            to={`/brand/${brand.name}`}
                        >
                            <div className="border">
                                <img src={brand.img}></img>
                                <p className="text-black text-center font-semibold">{brand.name}</p>
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default Brands;