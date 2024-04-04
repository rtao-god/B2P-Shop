import './Header.sass';

const Header = () => {
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
        </header>
    );
};

export default Header;
