// components/Nav.tsx
import React from 'react';
import './Nav.sass';
import useApi from '@hooks/useApi'; // Adjust this path as necessary

interface Brand {
  title?: string;
}

const Nav: React.FC = () => {
  // Specify only the endpoint, as the base URL is included within the useApi hook
  const { data: brands, isLoading, error } = useApi<Brand[]>('/directory/stores');

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching brands: {error.message}</div>;

  return (
    <div className='main_nav container'>
      <ul>
        <li className="all_brands"><a href="/all_brands">Все бренды</a></li>
        {brands?.map((brand, index) => (
          <li className="other_brands" key={index}>
            <a href={"/" + (brand.title ? brand.title.toLowerCase() : 'unknown')}>{brand.title || 'Unknown Brand'}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
