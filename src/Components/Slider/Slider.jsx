import ImageSlider from "./ImageSlider";

const Slider = () => {
    const slides = [
        {url: 'https://i.ibb.co/j69NTh0/Tech-Hub-Get-your-dream-phone-here.png', title: 'tech hub'},
        {url: 'https://i.ibb.co/vXDyGbt/Untitled-design.png', title: 'phone'},
        {url: 'https://i.ibb.co/WsX0T39/Untitled-design-1.png', title: 'phone'}
    ]

    // const slider = {
    //     height: '50vh'
    // }
    return (
        <div className="max-w-6xl mx-auto h-32 sm:h-44 md:h-60 lg:h-96 my-10">
            <ImageSlider slides={slides}></ImageSlider>
        </div>
    );
};

export default Slider;