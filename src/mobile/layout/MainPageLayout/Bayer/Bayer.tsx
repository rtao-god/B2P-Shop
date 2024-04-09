import styles from './Bayer.module.sass';
import useApi from '@/hooks/useApi';
import Message from '@/components/common/icons/Message';
import Favourites from '@/components/common/icons/Favourites';
import Slider from 'react-slick';

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

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    };

    return (
        <div>
            <h4>Байеры</h4>
            <Slider className={styles.slider} {...settings}>
                {apiResponse.data.map(bayer => (
                    <div key={bayer.id} className={styles.slide}>
                        <img className={styles.img} src={bayer.picture.path} alt={bayer.shop_name} />
                        <div className={styles.favorites}>
                            <Favourites />
                        </div>
                        <p className={styles.shop_name}> {bayer.shop_name} </p>
                        <p className={styles.comments}> <Message /> {bayer.comments} </p>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default BayerComponent;
