import React from 'react';
import styles from './Nav.module.sass';
import useApi from '@hooks/useApi';

interface Brand {
  title?: string;
}

const Nav: React.FC = () => {
  const { data: brands, isLoading, error } = useApi<Brand[]>('/directory/stores');

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching brands: {error.message}</div>;

  return (
    <div className={`${styles.main_nav} ${styles.container}`}>
      <ul>
        <li className={styles.all_brands}><a href="/all_brands">Все бренды</a></li>
        {brands?.map((brand, index) => (
          <li className={styles.other_brands} key={index}>
            <a href={"/" + (brand.title ? brand.title.toLowerCase() : 'unknown')}>{brand.title || 'Unknown Brand'}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
