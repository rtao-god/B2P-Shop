import React from 'react';
import useApi from '@/hooks/useApi';
import Favourites from '@/components/common/icons/Favourites';
import Stars from '@/components/common/icons/Stars';
import styles from './Bestsellers.module.sass';

interface StoreFile {
    id: string;
    filename: string;
    size: number;
    path: string;
}

interface Store {
    id: string;
    title: string;
    file: StoreFile;
}

interface Shop {
    id: string;
    title: string;
}

interface Category {
    id: string;
    title: string;
}

interface ProductFile {
    id: string;
    path: string;
}

interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    quantity: number;
    unit: string;
    rate: number;
    max_rate: number;
    stocks_labels: string[];
    category: Category;
    file: ProductFile;
    shop: Shop;
    store: Store;
    is_favorite: boolean;
}

const Bestsellers: React.FC = () => {
    const recommendId = "f433a2fb-b6cd-48ac-afc6-2ec1f6332419";
    const { data: products, isLoading, error } = useApi<Product[]>(`/product/recommend?type_size_id=${recommendId}`);

    const formatPrice = (price: number): string => {
        return new Intl.NumberFormat('fr-FR').format(price);
    };

    if (isLoading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка: {error.message}</div>;
    if (!products) return <div>Данные не найдены.</div>;

    return (
        <div className={styles.bestsellers}>
            <h4 className={styles.bestsellers_h4}>Бестселлеры</h4>
            {products.map(product => (
                <div key={product.id} className={styles.bestseller}>
                    <div className={styles.product_overview}>
                        <img src={product.file?.path} alt={product.title} className={styles.img} />
                        <div className={styles.details}>
                            <div className={styles.row}>
                                <div className={styles.stars_left}>
                                    <div>
                                        <Stars rating={product.rate} maxRate={product.max_rate} />
                                    </div>
                                    <p className={styles.rate}>{product.rate} / {product.max_rate}</p>
                                </div>
                                <div><img className={styles.store_svg} src={product.store.file.path} alt={product.store.title} /></div>
                            </div>

                            <div className={`${styles.row} ${styles.product_title_wrapper}`}>
                                <h4 className={styles.product_title}>{product.title}</h4>
                                <Favourites />
                            </div>

                            <div className={styles.row}>
                                <p className={styles.shop_title}>{product.shop.title}</p>
                            </div>

                            <div className={styles.row}>
                                <p className={styles.price}>от {formatPrice(product.price)} ₽ <span className={styles.quantity}>/ {product.quantity} {product.unit}.</span></p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.stocks}>
                        {product.stocks_labels.map((label, index) => (
                            <span key={index}>{label}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Bestsellers;
