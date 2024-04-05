import useApi from '@/hooks/useApi';
import React from 'react'

interface Bestsellers {

}

const Bestsellers: React.FC<Bestsellers> = (props) => {
    const { data: recommend, isLoading, error } = useApi<Bestsellers[]>('/product/recommend');

    // console.log(recommend)

    return (
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo veniam illo impedit aspernatur, molestias ex cum sed blanditiis quae placeat dolorum, voluptatum delectus nemo, at sequi voluptatibus? Odio, assumenda sint!
        </div>
    )
}

export default Bestsellers