import styles from './Header.module.sass';

const Header = () => {
    return (
        <header className={styles.header}>
            <button className={styles.btn_trans}>Вход</button>
            <button className={styles.btn_blue}>Регистрация</button>
        </header>
    );
};

export default Header;
