import LogoGrey from '@/components/common/icons/Logos/LogoGrey'
import styles from './Footer.module.sass'
import useApi from '@/hooks/useApi';

interface FooterProps {

}

const Footer: React.FC = (props) => {
    const { data: text, isLoading, error } = useApi<FooterProps>('/text');

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error fetching text: {error.message}</div>;
    if (!text) return <div>No text found.</div>;

    console.log(text)

    return (
        <div className={styles.footer}>
            <div className={styles.footer_content}>
                <div className={styles.container1}>
                    <LogoGrey />
                    <p>B2P.shop (c) 2023</p>
                </div>

                <div className={styles.container2}>
                    <a href="/aboutService"> О сервисе </a>
                    <a href="/rules"> Правила </a>
                </div>
            </div>
        </div>
    )
}

export default Footer