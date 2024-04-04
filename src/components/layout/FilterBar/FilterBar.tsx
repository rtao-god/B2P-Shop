import React, { useEffect, useState } from 'react'
import './FilterBar.sass'

type FilterBarProps = {}

const FilterBar: React.FC<FilterBarProps> = (props) => {
    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            {screenWidth > 1200 &&
                <div className="filters container">
                    <div className='filters-inputs'>
                        <input type="text" name="size-type" placeholder="Тип размера" />
                        <input type="text" name="size" placeholder="Размер" />
                        <input type="text" name="category" placeholder="Категория" />
                        <input type="text" name="availability" placeholder="Наличие" />
                        <div className="input-wrapper">
                            <input type="number" name="price-from" placeholder="От" />
                            <span className="currency-symbol">₽</span>
                        </div>
                        <div className="input-wrapper">
                            <input type="number" name="price-to" placeholder="До" />
                            <span className="currency-symbol">₽</span>
                        </div>
                        <div className="input-wrapper penultimate-input">
                            <input type="number" name="price-to" placeholder="От" />
                            <span className="currency-symbol">шт.</span>
                        </div>
                        <div className="input-wrapper last-input">
                            <input style={{ borderRight: "none" }} type="number" name="price-to" placeholder="До" />
                            <span className="currency-symbol">шт.</span>
                        </div>
                    </div>
                    <button className="btn search-btn">Найти</button>
                </div>
            }

            {screenWidth < 1200 &&
                <div className="filters container">
                    <div className='filters-inputs'>
                        <input
                            type="text"
                            name="size-type"
                            placeholder="Международный"
                        />
                        <input
                            type="text"
                            name="size"
                            placeholder="Размер"
                        />
                        <input
                            type="text"
                            name="size-type"
                            placeholder="Категория"
                        />
                        <input
                            type="text"
                            name="size-type"
                            placeholder="Наличие"
                        />
                        <div className='range-filter-container input-wrapper'>
                            <div className="input-wrapper">
                                <input type="number" name="price-from" placeholder="Цена от" />
                                <span className="currency-symbol">₽</span>
                            </div>
                            <div className="input-wrapper">
                                <input type="number" name="price-to" placeholder="Цена до" />
                                <span className="currency-symbol">₽</span>
                            </div>
                        </div>
                        <div className='range-filter-container input-wrapper'>
                            <div className="input-wrapper">
                                <input type="number" name="price-from" placeholder="От" />
                                <span className="currency-symbol">шт.</span>
                            </div>
                            <div className="input-wrapper">
                                <input type="number" name="price-to" placeholder="До" />
                                <span className="currency-symbol">шт.</span>
                            </div>
                        </div>
                    </div>
                    <button className="btn search-btn">Найти</button>
                </div>
            }
        </div>
    )
}

export default FilterBar