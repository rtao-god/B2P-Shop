import React from 'react'
import useApi from '@/hooks/useApi'

interface Bayer {

}

const Bayer: React.FC = (props) => {
    // const cityId = "your_city_id_here";
    // const categoriesId = "your_category_id_here";

    // const endpoint = `/shops?limit=12&city_id=${cityId}&categories_id=${categoriesId}`;
    // const { data, isLoading, error } = useApi(endpoint);
    const { data: city, isLoading, error } = useApi<Bayer[]>('/shops/');

    // console.log(city)

    return (
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum omnis sit minima laborum, itaque harum esse, nulla incidunt ad a nostrum at corporis odio voluptates! Itaque ullam esse assumenda deleniti.
        </div>
    )
}

export default Bayer
