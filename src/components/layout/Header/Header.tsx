import Logo from '@/components/common/icons/Logos/Logo';
import styles from './Header.module.sass';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header_content}>
                <div className={styles.logo_container}>
                    <Logo />
                </div>
                <div className={styles.auth_buttons}>
                    <button className={styles.btn_trans}>Вход</button>
                    <button className={styles.btn_blue}>Регистрация</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
