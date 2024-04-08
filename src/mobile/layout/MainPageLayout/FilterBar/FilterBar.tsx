import React, { useState } from 'react';
import styles from './FilterBar.module.sass';
import MyNumberInput from '@/components/common/MyNumberInput/MyNumberInput';
import Mens from '@/components/common/icons/dropdown/Mens';
import Womens from '@/components/common/icons/dropdown/Womens';
import MyMultiSelect from '@/mobile/common/MyMultiSelect/MyMultiSelect'

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
    { value: 'mens', label: (<><Mens /> Мужское</>) },
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
    { value: 'inStock', label: (<>&#128092; В наличии</>) },
    { value: 'onTheWay', label: (<>&#128674; В пути</>) },
    { value: 'underOrder', label: 'Под заказ' },
];

const FilterBar: React.FC = () => {
    const [selectedSizeType, setSelectedSizeType] = useState<string[]>([]);
    const [selectedSize, setSelectedSize] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
    const [selectedAvailability, setSelectedAvailability] = useState<string[]>([]);

    const handleSingleSelectChange = (setter: React.Dispatch<React.SetStateAction<string[]>>) => (value: string[]) => {
        setter(value.length > 0 ? [value[value.length - 1]] : []);
    };

    return (
        <div className={styles.filter}>
            <MyMultiSelect placeholder="Тип размера" options={sizeTypeOptions} selectedValues={selectedSizeType} onChange={handleSingleSelectChange(setSelectedSizeType)} />
            <MyMultiSelect placeholder="Размер" options={sizeOptions} selectedValues={selectedSize} onChange={setSelectedSize} enforceSelectionLimit={true} maxSelections={5} />
            <MyMultiSelect placeholder="Категория" options={categoryOptions} selectedValues={selectedCategory} onChange={setSelectedCategory} />
            <MyMultiSelect placeholder="Наличие" options={availabilityOptions} selectedValues={selectedAvailability} onChange={setSelectedAvailability} />
            <div className={styles.range_filter_container}>
                <div className={styles.input_wrapper}><MyNumberInput name="price_from" placeholder="От" /><span className={styles.currency_symbol}>₽</span></div>
                <div className={styles.input_wrapper}><MyNumberInput name="price_to" placeholder="До" /><span className={styles.currency_symbol}>₽</span></div>
            </div>
            <div className={styles.range_filter_container}>
                <div className={styles.input_wrapper}><input type="number" name="quantity" placeholder="От" /><span className={styles.currency_symbol}>шт.</span></div>
                <div className={styles.input_wrapper}><input type="number" name="quantity" placeholder="До" /><span className={styles.currency_symbol}>шт.</span></div>
            </div>
            <button className={styles.search_button}>Найти</button>
        </div>
    );
};

export default FilterBar;