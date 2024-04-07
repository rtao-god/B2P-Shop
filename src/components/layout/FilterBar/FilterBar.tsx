import React, { useState } from 'react';
import styles from './FilterBar.module.sass';
import MyNumberInput from '@/components/common/MyNumberInput/MyNumberInput';
import Mens from '@/components/common/icons/dropdown/Mens';
import Womens from '@/components/common/icons/dropdown/Womens';
// import InStock from '@/components/common/icons/dropdown/InStock'; 
// import OnWay from '@/components/common/icons/dropdown/OnWay';
import MyMultiSelect from '@/components/common/MyMultiSelect/MyMultiSelect';

const sizeTypeOptions = [
    { value: 'international', label: 'Международный' },
    { value: 'european', label: 'Европейский' },
    { value: 'italian', label: 'Итальянский' },
    { value: 'american', label: 'Американский' },
    { value: 'russian', label: 'Российский' },
];

const sizeOptions = [
    { value: 'all', label: 'Все размеры' },
    { value: 'XS', label: 'XS' },
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'L', label: 'L' },
    { value: 'XL', label: 'XL' },
    { value: 'XXL', label: 'XXL' },
    { value: 'XXXL', label: 'XXXL' },
];

const categoryOptions = [
    { value: 'all', label: 'Все категории' },
    { value: 'mens', label: (<><Mens className='lol' /> Мужское</>) },
    { value: 'coats', label: 'Пальто' },
    { value: 'jackets', label: 'Пиджаки' },
    { value: 'trousers', label: 'Брюки' },
    { value: 'womens', label: (<><Womens /> Женское</>) },
    { value: 'cardigans', label: 'Кардиганы' },
    { value: 'blouses', label: 'Блузки' },
    { value: 'skirts', label: 'Юбки' },
    { value: 'hoodies', label: 'Худи' },
];

const availabilityOptions = [
    { value: 'all', label: 'Все варианты' },
    { value: 'inStock', label: 'В наличии' },
    { value: 'onTheWay', label: 'В пути' },
    { value: 'underOrder', label: 'Под заказ' },
];

const FilterBar: React.FC = () => {
    const [selectedSizeType, setSelectedSizeType] = useState<string[]>([]);
    const [selectedSize, setSelectedSize] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
    const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);

    const handleSingleSelectChange = (setter: React.Dispatch<React.SetStateAction<string[]>>) => (value: string[]) => {
        value.length > 0
            ? setter([value[value.length - 1]])
            : setter([]);
    };

    return (
        <div className={styles.filter}>
            <div className={styles.filter_inputs}>
                <MyMultiSelect
                    placeholder="Тип размера"
                    options={sizeTypeOptions}
                    selectedValues={selectedSizeType}
                    onChange={handleSingleSelectChange(setSelectedSizeType)}
                />
                <MyMultiSelect
                    placeholder="Размер"
                    options={sizeOptions}
                    selectedValues={selectedSize}
                    onChange={setSelectedSize}
                    enforceSelectionLimit={true} 
                    maxSelections={5} 
                />
                <MyMultiSelect
                    placeholder="Категория"
                    options={categoryOptions}
                    selectedValues={selectedCategory}
                    onChange={setSelectedCategory}
                />
                <MyMultiSelect
                    placeholder="Наличие"
                    options={availabilityOptions}
                    selectedValues={selectedAvailability}
                    onChange={setSelectedAvailability}
                />
                <div className={styles.input_wrapper}>
                    <MyNumberInput name="price_from" placeholder="От" />
                    <span className={styles.currency_symbol}>₽</span>
                </div>
                <div className={styles.input_wrapper}>
                    <MyNumberInput name="price_to" placeholder="До" />
                    <span className={styles.currency_symbol}>₽</span>
                </div>
                <div className={`${styles.input_wrapper} ${styles.penultimate_input}`}>
                    <input type="number" name="quantity" placeholder="От" />
                    <span className={styles.currency_symbol}>шт.</span>
                </div>
                <div className={`${styles.input_wrapper} ${styles.last_input}`}>
                    <input type="number" name="quantity" placeholder="До" />
                    <span className={styles.currency_symbol}>шт.</span>
                </div>
            </div>
            <button className={styles.search_button}> Найти </button>
        </div >
    );
};
export default FilterBar;


/*  useEffect(() => {
     const handleResize = () => {
         setScreenWidth(window.innerWidth);
     };

     window.addEventListener('resize', handleResize);
     return () => {
         window.removeEventListener('resize', handleResize);
     };
 }, []); */

/* {screenWidth <= 1200 &&
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
} */