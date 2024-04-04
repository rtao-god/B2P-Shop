/* import React from 'react';
import useConfig from '@hooks/useConfig'; 

const Notifications: React.FC = () => {
    const { config, isLoading, error } = useConfig('/config');

    if (isLoading) return <div>Loading configuration...</div>;
    if (error) return <div>Error fetching configuration: {error.message}</div>;

    return (
        <div>
            {config?.notifications.map((notification, index) => (
                <div key={index}>
                    <h4>{notification.title} Технические работы </h4>
                    <p>{notification.message} Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi officia consequuntur, architecto ut doloribus magni blanditiis libero deleniti reprehenderit nostrum ex a fugit esse, dolores ab modi ullam atque. Iure.</p>
                </div>
            ))}
        </div>
    );
}

export default Notifications; */

import Cross from '@components/common/icons/Cross';
import './Notifications.sass'

const Notifications: React.FC = () => {
    return (
        <div className="notification_container container">
            <div className="notification_eader">
                <p> Технические работы </p>
                <button> <Cross /></button>
            </div>

            <div>
                <h4> Заголовок объявления </h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi officia consequuntur, architecto ut doloribus magni blanditiis libero deleniti reprehenderit nostrum ex a fugit esse, dolores ab modi ullam atque. Iure.</p>
            </div>
        </div>
    );
}

export default Notifications;

