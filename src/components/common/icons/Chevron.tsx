import React from 'react'

interface Chevron {
    className?: string
}

const Chevron: React.FC<Chevron> = (props) => {
    return (
        <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 0.250001L5 6.5L7.45305e-08 0.25L1.81996 0.25L5 4.28978L8.18004 0.250001L10 0.250001Z" fill="#1976D2" />
        </svg>
    )
}

export default Chevron