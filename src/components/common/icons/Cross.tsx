interface CrossProps {
    className?: string
    color?: string
}

const Cross: React.FC<CrossProps> = ({ className, color = "#B1B1B1" }) => {
    return (
        <svg className={className} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.75 1.81984L12.1802 0.25L7 5.43016L1.81984 0.25L0.25 1.81984L5.43016 7L0.25 12.1802L1.81984 13.75L7 8.56984L12.1802 13.75L13.75 12.1802L8.56984 7L13.75 1.81984Z" fill={color} />
        </svg>
    );
};

export default Cross