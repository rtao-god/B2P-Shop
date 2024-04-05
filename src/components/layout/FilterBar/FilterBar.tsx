import React, { useEffect, useState } from 'react';
import styles from './FilterBar.module.sass';

interface FilterBarProps {
    
}

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
        <div className={styles.container}>
            {screenWidth > 1200 &&
                <div className={styles.filter_container}>
                    <div className={styles.filter_inputs}>
                        <input type="text" name="size-type" placeholder="Тип размера" />
                        <input type="text" name="size" placeholder="Размер" />
                        <input type="text" name="category" placeholder="Категория" />
                        <input type="text" name="availability" placeholder="Наличие" />
                        <div className={styles.input_wrapper}>
                            <input type="number" name="price_from" placeholder="От" />
                            <span className={styles.currency_symbol}>₽</span>
                        </div>
                        <div className={styles.input_wrapper}>
                            <input type="number" name="price_to" placeholder="До" />
                            <span className={styles.currency_symbol}>₽</span>
                        </div>
                        <div className={`${styles.input_wrapper} ${styles.penultimate_input}`}>
                            <input type="number" name="price_from" placeholder="От" />
                            <span className={styles.currency_symbol}>шт.</span>
                        </div>
                        <div className={`${styles.input_wrapper} ${styles.last_input}`}>
                            <input style={{ borderRight: "none" }} type="number" name="price_to" placeholder="До" />
                            <span className={styles.currency_symbol}>шт.</span>
                        </div>
                    </div>
                    <button className={styles.search_button}>Найти</button>
                </div>
            }

            {screenWidth <= 1200 &&
                <div className={styles.filter_container_mobile}>
                    <div className={styles.filter_inputs}>
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
                            name="category"
                            placeholder="Категория"
                        />
                        <input
                            type="text"
                            name="availability"
                            placeholder="Наличие"
                        />
                        <div className={styles.range_filter_container}>
                            <div className={styles.input_wrapper}>
                                <input type="number" name="price_from" placeholder="Цена от" />
                                <span className={styles.currency_symbol}>₽</span>
                            </div>
                            <div className={styles.input_wrapper}>
                                <input type="number" name="price_to" placeholder="Цена до" />
                                <span className={styles.currency_symbol}>₽</span>
                            </div>
                        </div>
                        <div className={styles.range_filter_container}>
                            <div className={styles.input_wrapper}>
                                <input type="number" name="quantity_from" placeholder="От" />
                                <span className={styles.currency_symbol}>шт.</span>
                            </div>
                            <div className={styles.input_wrapper}>
                                <input type="number" name="quantity_to" placeholder="До" />
                                <span className={styles.currency_symbol}>шт.</span>
                            </div>
                        </div>
                    </div>
                    <button className={styles.search_button}>Найти</button>
                </div>
            }
        </div>
    );
}

export default FilterBar;
