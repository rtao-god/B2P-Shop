import React from 'react';
import Slider from 'react-slick';
import useApi from '@hooks/useApi';
import styles from './MainSlider.module.sass';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Chevron from '@/components/common/icons/Chevron';

interface Slide {
    id: string;
    path: string;
}

interface CustomArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
    direction: 'left' | 'right';
}

const CustomArrow: React.FC<CustomArrowProps> = ({ className, style, onClick, direction }) => {
    const arrowClass = `${styles.slick_arrow} ${direction === 'left' ? styles.slick_prev : styles.slick_next}`;

    return (
        <div className={`${className || ''} ${arrowClass}`} style={style} onClick={onClick}>
            <Chevron />
        </div>
    );
};

const MainSlider: React.FC = () => {
    const { data: slides, isLoading, error } = useApi<Slide[]>('/main-page/slides');

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error fetching slides: {error.message}</div>;
    if (!slides || slides.length === 0) return <div>No slides found.</div>;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1.5,
        slidesToScroll: 1,
        adaptiveHeight: true,
        nextArrow: <CustomArrow direction="right" />,
        prevArrow: <CustomArrow direction="left" />,
    };

    return (
        <div>
            {/* <Slider {...settings}>
                 {slides.map((slide) => (
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
        </Slider> */}
        </div>
    );
};

export default MainSlider;
