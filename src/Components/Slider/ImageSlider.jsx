import { useState } from "react";


const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideStyles = {
        backgroundPosition: "center",
        backgroundImage: `url(${slides[currentIndex].url})`
    }
    const slideArrow = {
        transform: 'translate(0, -50%)'
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }
    const goToNext = () => {
        const isLastSlide = currentIndex === 2;
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const goToSlide = slideIndex => {
        setCurrentIndex(slideIndex);
    }
    return (
        <div className="h-full relative mx-3">
            <div onClick={goToPrevious} style={slideArrow} className="absolute top-1/2 left-8 text-5xl text-black cursor-pointer z-10 font-black">❮</div>
            <div onClick={goToNext} style={slideArrow} className="absolute top-1/2 right-8 text-5xl text-black cursor-pointer z-10 font-black">❯</div>
            <div className="w-full h-full rounded-lg bg-cover" style={slideStyles}>
            </div>
            <div className="flex justify-center">
                {
                    slides.map((slide, index) => <div onClick={() => goToSlide(index)} className={`ml-2 text-2xl cursor-pointer ${currentIndex === index ? 'text-black' : 'text-gray-400'}`} key={index}>●</div>)
                }
            </div>
        </div>
    );
};

export default ImageSlider;