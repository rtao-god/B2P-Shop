/* import React from 'react';
import useConfig from '@hooks/useConfig';
import styles from './Notifications.module.sass';

const Notifications: React.FC = () => {
    const { config, isLoading, error } = useConfig('/config');

    if (isLoading) return <div>Loading configuration...</div>;
    if (error) return <div>Error fetching configuration: {error.message}</div>;

    return (
        <div>
            {config?.notifications.map((notification, index) => (
                <div key={index} className={styles.notification}>
                    <h4 className={styles.subtitle}>{notification.title} Технические работы </h4>
                    <p className={styles.text}>{notification.message} Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi officia consequuntur, architecto ut doloribus magni blanditiis libero deleniti reprehenderit nostrum ex a fugit esse, dolores ab modi ullam atque. Iure.</p>
                </div>
            ))}
        </div>
    );
}

export default Notifications; */

import React, { useState } from 'react';
import styles from './Notifications.module.sass';
import Cross from '@components/common/icons/Cross';

const Notifications: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => setIsVisible(false);

    if (!isVisible) return null;

    return (
        <div className={styles.notification}>
            <div className={styles.header}>
                <h4 className={styles.title}>Технические работы</h4>
                <button className={styles.close_btn} onClick={handleClose}>
                    <Cross />
                </button>
            </div>

            <div className={styles.body}>
                <h3 className={styles.subtitle}>Заголовок объявления</h3>
                <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi officia consequuntur, architecto ut doloribus magni blanditiis libero deleniti reprehenderit nostrum ex a fugit esse, dolores ab modi ullam atque. Iure.</p>
            </div>
        </div>
    );
}

export default Notifications;


