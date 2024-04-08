import React from 'react';
import LogoGrey from '@/components/common/icons/Logos/LogoGrey';
import styles from './Footer.module.sass';
import useApi from '@/hooks/useApi';

interface Rule {
    id: string;
    content: string;
}

interface About {
    id: string;
    content: string;
}

const Footer: React.FC = () => {
    const { data: rulesData, isLoading: isLoadingRules, error: errorRules } = useApi<Rule>('/text/rules');
    const { data: aboutData, isLoading: isLoadingAbout, error: errorAbout } = useApi<About>('/text/about');

    if (isLoadingRules || isLoadingAbout) return <div>Загрузка...</div>;
    if (errorRules || errorAbout) return <div>Ошибка при получении данных</div>;
    if (!rulesData || !aboutData) return <div>Данные не найдены.</div>;

    console.log(rulesData, aboutData)

    return (
        <div className={styles.footer}>
            <div className={styles.footer_content}>
                <div className={styles.container1}>
                    <LogoGrey />
                    <p>B2P.shop (c) 2023</p>
                </div>

                <div className={styles.container2}>
                    <a target="_blank" href="/aboutService"><div dangerouslySetInnerHTML={{ __html: aboutData.content }} /> О сервисе </a>
                    <a target="_blank" href="/rules"><div dangerouslySetInnerHTML={{ __html: rulesData.content }} />Правила</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
