import React from 'react';
import Slider from 'react-slick';
import useApi from '@hooks/useApi';
import styles from './MainSlider.module.sass';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Slide {
    id: string;
    path: string;
}

interface ApiResponse {
    data: Slide[];
    meta: {
        limit: number;
        page: number;
        total: number;
    };
}

const MainSlider: React.FC = () => {
    const { data: apiResponse, isLoading, error } = useApi<ApiResponse>('/stories');

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error fetching slides: {error.message}</div>;
    if (!apiResponse || !apiResponse.data.length) return <div>No slides found.</div>;

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };

    return (
        <Slider {...settings}>
            {apiResponse.data.map(slide => (
                <div key={slide.id} style={{ width: '100%', position: 'relative' }}>
                    <div className={styles.slide}
                        style={{
                            backgroundImage: `url(${slide.path})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '258px',
                        }}
                    ></div>
                </div>
            ))}
        </Slider>
    );
};

export default MainSlider;
