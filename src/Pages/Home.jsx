import Brands from "../Components/Brands";
import DarkMode from "../Components/DarkModeToggle/DarkMode";


const Home = () => {
    return (
        <div className="max-w-6xl mx-auto px-3">
            <div className="flex items-center">
                <p className="text-xl font-bold">Change Theme: </p>
            <DarkMode></DarkMode>
            </div>
            <img className="w-full my-10" src={'https://i.ibb.co/whdBh8y/pixlr-image-generator-aa26220e-2f4a-4138-aafe-8029eb69b066.png'} alt="" />
            <Brands></Brands>
        </div>
    );
};

export default Home;