import React, { useState, useEffect } from 'react';
import './Nav.sass'

interface Brand {
    title: string;
}

const Nav: React.FC<Brand> = () => {
    const [brands, setBrands] = useState<Brand[]>([]);

    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const response = await fetch('https://b2pshop.click/api/v2/directory/stores');
                const data: Brand[] = await response.json();
                setBrands(data);
            } catch (error) {
                console.error('Error fetching brands:', error);
            }
        };

        fetchBrands();
    }, []);

    return (
        <div className='main_nav container'>
            <ul>
                <li className="all_brands"><a href="/all_brands">Все бренды</a></li>
                {brands.map((brand, index) => (
                    <li className="other_brands" key={index}>
                        <a href={"/" + brand.title.toLowerCase()}>{brand.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Nav;
