import React, { useState } from 'react';
import useApi from '@hooks/useApi';

interface MainSlider {
    id?: number;
    imageUrl?: string;
    title?: string;
    description?: string;
};

const MainSlider: React.FC<MainSlider> = () => {
    // const { data: slides, isLoading, error } = useApi<MainSlider[]>('/main-page/slides');
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);    

   /*  const handleNextSlide = () => {
        setCurrentSlideIndex((prevIndex) =>
            prevIndex === slides?.length - 1 ? 0 : prevIndex + 1
        );
    }; */

   /*  const handlePreviousSlide = () => {
        setCurrentSlideIndex((prevIndex) =>
            prevIndex === 0 ? (slides?.length ?? 1) - 1 : prevIndex - 1
        );
    }; */

    // if (isLoading) return <div>Loading...</div>;
    // if (error) return <div>Error fetching slides: {error.message}</div>;
    // if (!slides) return <div>No slides found.</div>;

    // console.log(slides)

    return (
        <div /* style={{ width: '100vw', height: '100vh', position: 'relative' }} */>
            {/* {slides?.map((slide, index) => ( */}
                <div
                    // key={slide.id}
                    // style={{
                    //     width: '100%',
                    //     height: '100%',
                    //     backgroundImage: `url(${slide.imageUrl})`,
                    //     backgroundSize: 'cover',
                    //     backgroundPosition: 'center',
                    //     display: index === currentSlideIndex ? 'block' : 'none',
                    // }}
                >
                    {/* <h2>{slide.title}</h2>
                    <p>{slide.description}</p> */}
                    l
                </div>
            {/* ))} */}
            {/* <button onClick={handlePreviousSlide} style={{ position: 'absolute', left: 20, top: '50%' }}>Previous</button>
            <button onClick={handleNextSlide} style={{ position: 'absolute', right: 20, top: '50%' }}>Next</button> */}
        </div>
    );
};

export default MainSlider;
