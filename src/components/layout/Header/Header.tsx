import styles from './Header.module.sass';

const Header = () => {
    return (
        <header className={styles.site_header}>
            <div className={styles.top_bar}>
                <div className={`${styles.container} ${styles.top_bar_content}`}>
                    <div className={styles.logo_container}>
                        <img src="/icons/logo.svg" alt="Logo" />
                    </div>
                    <div className={styles.auth_buttons}>
                        <button className={styles.btn_trans}>Вход</button>
                        <button className={styles.btn_blue}>Регистрация</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
