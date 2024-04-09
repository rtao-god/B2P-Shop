import React from 'react';
import styles from './Bayer.module.sass';
import useApi from '@/hooks/useApi';
import Message from '@/components/common/icons/Message';
import Favourites from '@/components/common/icons/Favourites';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Не забудьте импортировать стили Swiper

interface Picture {
    id: string;
    filename: string;
    size: number;
    path: string;
}

interface Bayer {
    id: string;
    comments: number;
    is_favorites: boolean;
    shop_name: string;
    picture: Picture;
}

interface ApiResponse {
    data: Bayer[];
    meta: {
        limit: number;
        page: number;
        total: number;
    };
}

const BayerComponent: React.FC = () => {
    const citiesId = "f433a2fb-b6cd-48ac-afc6-2ec1f6332419";
    const endpoint = `/shops?type_size_id=${citiesId}`;
    const { data: apiResponse, isLoading, error } = useApi<ApiResponse>(endpoint);

    if (isLoading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка: {error.message}</div>;
    if (!apiResponse || !apiResponse.data) return <div>Данные не найдены.</div>;

    return (
        <div>
            <h4>Байеры</h4>
            <Swiper
                className={styles.slider}
                spaceBetween={50}
                slidesPerView={1.5}
                loop={true}
                breakpoints={{
                    320: {
                        slidesPerView: 1.5,
                        spaceBetween: 8
                    },
                    450: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    550: {
                        slidesPerView: 3,
                        spaceBetween: 16
                    }
                }}
            >
                {apiResponse.data.map(bayer => (
                    <SwiperSlide key={bayer.id} className={styles.slide}>
                        <img className={styles.img} src={bayer.picture.path} alt={bayer.shop_name} />
                        <div className={styles.favorites}>
                            <Favourites />
                        </div>
                        <p className={styles.shop_name}>{bayer.shop_name}</p>
                        <p className={styles.comments}><Message /> {bayer.comments}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default BayerComponent;
