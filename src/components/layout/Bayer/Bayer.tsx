import React from 'react'
import useApi from '@/hooks/useApi'
import styles from './Bayer.module.sass'
import Message from '@/components/common/icons/Message'
import Favourites from '@/components/common/icons/Favourites'

interface Bayer {
    id: string
    comments: number
    is_favorites: boolean
    picture: null
    shop_name: string
}

interface ApiResponse {
    data: Bayer[];
    meta: {
        limit: number;
        page: number;
        total: number;
    };
}

const Bayer: React.FC = (props) => {
    const citiesId = "f433a2fb-b6cd-48ac-afc6-2ec1f6332419";

    const endpoint = `/shops?type_size_id=${citiesId}`;
    const { data: apiResponse, isLoading, error } = useApi<ApiResponse>(endpoint);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!apiResponse || !apiResponse.data) return <div>No data found.</div>;

    return (
        <div>
            <h4> Байеры </h4>
            <div className={styles.cities}>
                {apiResponse.data.map(city => (
                    <div key={city.id} className={styles.city}>
                        {/* <img src={city.picture} alt="" /> */}
                        <div className={styles.img}></div>
                        <div className={styles.favorites}>
                            <Favourites />
                        </div>
                        <p className={styles.shop_name}> {city.shop_name} </p>
                        <p className={styles.comments}> <Message /> {city.comments} </p>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default Bayer
