import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import useApi from '@hooks/useApi';
import styles from './MainSlider.module.sass';

interface Slide {
    id: string;
    title: string;
    preview_title: string;
    description: string;
    file: {
        id: string;
        filename: string;
        size: number;
        path: string;
    };
    original: {
        id: string;
        filename: string;
        size: string;
        path: string;
    };
    status: boolean;
    publish_at: number;
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

    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={3}
            className={styles.swiper}
        >
            {apiResponse.data.map(slide => (
                <SwiperSlide key={slide.id}>
                    <div className={styles.img_wrapper}>
                        <div className={styles.img_border}>
                            <img src={slide.file.path} alt={slide.title} className={styles.img} />
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default MainSlider;
