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
                        <button className="login-btn">Вход</button>
                        <button className="register-btn">Регистрация</button>
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
                        <input
                            type="text"
                            name="size-type"
                            placeholder="Тип размера"
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
                        <input
                            type="text"
                            name="size-type"
                            placeholder="От   ₽"
                        />
                        <input
                            type="text"
                            name="size-type"
                            placeholder="До   ₽"
                        />
                        <input
                            type="text"
                            name="size-type"
                            placeholder="От   шт."
                        />
                        <input
                            type="text"
                            name="size-type"
                            placeholder="До   шт."
                        />
                    </div>
                    <button className="search-btn">Найти</button>
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
                        <div className='range-filter-container'>
                            <input
                                type="text"
                                name="size-type"
                                placeholder="Цена от   ₽"
                                className="input-flex"
                            />
                            <input
                                type="text"
                                name="size-type"
                                placeholder="Цена до   ₽"
                                className="input-flex"
                            />
                        </div>
                        <div className='range-filter-container'>
                            <input
                                type="text"
                                name="size-type"
                                placeholder="От   шт."
                            />
                            <input
                                type="text"
                                name="size-type"
                                placeholder="До   шт."
                            />
                        </div>
                    </div>
                    <button className="search-btn">Найти</button>
                </div>
            }
        </header>
    );
};

export default Header;
