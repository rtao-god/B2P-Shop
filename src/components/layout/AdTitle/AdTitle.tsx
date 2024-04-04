import Cross from '@components/common/icons/Cross'
import React from 'react'

type AdTitleProps = {}

const AdTitle: React.FC<AdTitleProps> = (props) => {
    return (
        <div className='adTitle'>
            <div className='announcement_header'>
                <p> Технические работы </p>
                <button> <Cross /> </button>
            </div>

            <h4></h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptatum numquam ratione. Repellat accusamus, dolor natus, soluta enim deserunt quo ducimus, voluptatum reiciendis eos aspernatur cupiditate placeat porro repudiandae quasi!</p>
        </div>
    )
}

export default AdTitle