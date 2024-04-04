import './Header.sass';

const Header = () => {
    return (
        <header className="site_header">
            <div className="top_bar">
                <div className="container top_bar_content">
                    <div className="logo_container">
                        <img src="/icons/logo.svg" alt="Logo" />
                    </div>
                    <div className="auth_buttons">
                        <button className="btn btn_trans">Вход</button>
                        <button className="btn btn_blue">Регистрация</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
