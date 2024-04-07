interface StarsProps {
    rating: number; 
    maxRate: number; 
}

const Stars: React.FC<StarsProps> = ({ rating, maxRate = 5 }) => {
    const renderStars = Array.from({ length: maxRate }, (_, index) => {
        const fillColor = (index + 1) <= Math.floor(rating) ? "#FFD700" : "#E3E3E5";
        return (
            <svg key={index} width="20" height="18" viewBox="0 0 20 18" fill={fillColor} xmlns="http://www.w3.org/2000/svg">
                <path d="M9.57915 14.4663L15.4339 18L13.8802 11.34L19.0528 6.85895L12.2413 6.28105L9.57915 0L6.91705 6.28105L0.105469 6.85895L5.2781 11.34L3.72442 18L9.57915 14.4663Z" />
            </svg>
        );
    });

    return <>{renderStars}</>;
};

export default Stars