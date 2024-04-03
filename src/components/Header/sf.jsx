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
                    <li><a href="/all-brands">Все бренды</a></li>
                    <li><a href="/farfetch">Farfetch</a></li>
                    <li><a href="/asos">ASOS</a></li>
                    <li><a href="/zara">Zara</a></li>
                    <li><a href="/handm">H&M</a></li>
                    <li><a href="/massimo-dutti">Massimo Dutti</a></li>
                </ul>
            </nav>

            <div className="filters container">
                <div className='filters-inputs'>
                    <input
                        type="text"
                        name="size-type"
                        placeholder={screenWidth < 1200 ? "Международный" : "Тип размера"}
                        className="input-full"
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

                    {screenWidth < 1200
                        ? <div className={screenWidth < 1200 ? "input-container-flex" : "input-container"}>
                            <div className={screenWidth < 1200 ? "input-flex" : "input-block"}>
                                <input
                                    type="text"
                                    name="size-type"
                                    placeholder={screenWidth < 1200 ? "Цена от   ₽" : "От   ₽"}
                                    className={screenWidth < 1200 ? "input-flex" : "input-block"}
                                />
                                <input
                                    type="text"
                                    name="size-type"
                                    placeholder={screenWidth < 1200 ? "Цена до   ₽" : "До   ₽"}
                                    className={screenWidth < 1200 ? "input-flex" : "input-block"}
                                />
                            </div>
                            <input
                                type="text"
                                name="size-type"
                                placeholder="От   шт."
                            />
                            <input
                                type="text"
                                name="size-type"
                                placeholder="До   шт."
                                className='lol'
                            />
                        </div>
                    }
                </div>
                <button className="search-btn">Найти</button>
            </div>
        </header>
    );
};

export default Header;
