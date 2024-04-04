import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className="site-header">
            <div className="top-bar">
                <div className="container top-bar-content">
                    <div className="logo-container">
                        <img src="/icons/logo.svg" alt="Logo" />
                    </div>
                    <div className="auth-buttons">
                        <button className="btn btn-trans">Вход</button>
                        <button className="btn btn-blue">Регистрация</button>
                    </div>
                </div>
            </div>

            <nav className="main-nav container">
                <ul>
                    <li className="all-brands"><a href="/all-brands">Все бренды</a></li>
                    <li className="other-brands"><a href="/farfetch">Farfetch</a></li>
                    <li className="other-brands"><a href="/asos">ASOS</a></li>
                    <li className="other-brands"><a href="/zara">Zara</a></li>
                    <li className="other-brands"><a href="/handm">H&M</a></li>
                    <li className="other-brands"><a href="/massimo-dutti">Massimo Dutti</a></li>
                </ul>
            </nav>

            {screenWidth > 1200 &&
                <div className="filters container">
                    <div className='filters-inputs'>
                        <input type="text" name="size-type" placeholder="Тип размера" />
                        <input type="text" name="size" placeholder="Размер" />
                        <input type="text" name="category" placeholder="Категория" />
                        <input type="text" name="availability" placeholder="Наличие" />
                        <div className="input-wrapper">
                            <input type="text" name="price-from" placeholder="От" />
                            <span className="currency-symbol">₽</span>
                        </div>
                        <div className="input-wrapper">
                            <input type="text" name="price-to" placeholder="До" />
                            <span className="currency-symbol">₽</span>
                        </div>
                        <div className="input-wrapper">
                            <input type="text" name="price-to" placeholder="От" />
                            <span className="currency-symbol">₽</span>
                        </div>
                        <div className="input-wrapper last-input">
                            <input style={{ borderRight: "none" }} type="text" name="price-to" placeholder="До" />
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
                                <input type="text" name="price-from" placeholder="Цена от" />
                                <span className="currency-symbol">₽</span>
                            </div>
                            <div className="input-wrapper">
                                <input type="text" name="price-to" placeholder="Цена до" />
                                <span className="currency-symbol">₽</span>
                            </div>
                        </div>
                        <div className='range-filter-container input-wrapper'>
                            <div className="input-wrapper">
                                <input type="text" name="price-from" placeholder="От" />
                                <span className="currency-symbol">шт.</span>
                            </div>
                            <div className="input-wrapper">
                                <input type="text" name="price-to" placeholder="До" />
                                <span className="currency-symbol">шт.</span>
                            </div>
                        </div>
                    </div>
                    <button className="btn search-btn">Найти</button>
                </div>
            }
        </header>
    );
};

export default Header;
