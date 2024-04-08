import React, { useState } from 'react';
import styles from './Nav.module.sass';
import useApi from '@hooks/useApi';

interface BrandProps {
  id: string;
  title: string;
  available: boolean;
}

const Nav: React.FC = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const { data: brands, isLoading, error } = useApi<BrandProps[]>('/directory/stores');

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching manual: {error.message}</div>;
  if (!brands) return <div>No manual found.</div>;

  const handleSelectAll = () => {
    if (!selectAll) {
      setSelectedIds(brands.filter(brand => brand.available).map(brand => brand.id));
    } else {
      setSelectedIds([]);
    }
    setSelectAll(!selectAll);
  };

  const handleBrandClick = (id: string) => {
    const newSelectedIds = selectedIds.includes(id)
      ? selectedIds.filter(selectedId => selectedId !== id)
      : [...selectedIds, id];

    setSelectedIds(newSelectedIds);

    setSelectAll(newSelectedIds.length === brands.filter(brand => brand.available).length);
  };

  return (
    <div className={styles.main_nav}>
      <button className={`${styles.all_brands} ${selectAll ? styles.brand_selected : ''}`} onClick={handleSelectAll}>Все бренды</button>
      {brands.map(brand => (
        <button
          key={brand.id}
          className={`${styles.brand_button} ${!brand.available ? styles.brand_unavailable : ''} ${selectedIds.includes(brand.id) ? styles.brand_selected : ''}`}
          onClick={() => handleBrandClick(brand.id)}
          disabled={!brand.available}
        >
          {brand.title}
        </button>
      ))}
    </div>
  );
};

export default Nav
