import React, { useState } from 'react';

interface NumberInputProps {
    placeholder: string;
    name: string;
}

const MyNumberInput: React.FC<NumberInputProps> = ({ placeholder, name }) => {
    const [value, setValue] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let rawNumber = e.target.value.replace(/\D/g, '');
        let formattedNumber = rawNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        setValue(formattedNumber);
    };

    return (
        <input
            type="text"
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
        />
    );
};

export default MyNumberInput;
