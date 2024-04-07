import React, { useState, useRef, useEffect } from 'react';
import styles from './MyMultiSelect.module.sass';

interface OptionType {
  value: string;
  label: string | JSX.Element;
}

interface MyMultiSelectProps {
  options: OptionType[];
  placeholder: string;
  selectedValues: string[];
  onChange: (values: string[]) => void;
  enforceSelectionLimit?: boolean;
  maxSelections?: number;
}

const MyMultiSelect: React.FC<MyMultiSelectProps> = ({
  options,
  placeholder,
  selectedValues,
  onChange,
  enforceSelectionLimit = false,
  maxSelections = 5,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filterText, setFilterText] = useState('');
  const [filteredOptions, setFilteredOptions] = useState<OptionType[]>(options);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [wrapperRef]);

  useEffect(() => {
    const lowerCaseFilter = filterText.toLowerCase();
    const filtered = options.filter(option => 
      option.label.toString().toLowerCase().includes(lowerCaseFilter)
    );
    setFilteredOptions(filtered);
  }, [filterText, options]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (value: string) => {
    const isCurrentlySelected = selectedValues.includes(value);
    let updatedSelectedValues = [];

    if (isCurrentlySelected) {
      updatedSelectedValues = selectedValues.filter(v => v !== value);
    } else {
      if (enforceSelectionLimit && selectedValues.length >= maxSelections) {
        alert(`You can only select up to ${maxSelections} options.`);
        return;
      }
      updatedSelectedValues = [...selectedValues, value];
    }

    onChange(updatedSelectedValues);
  };

  const selectedOptionsDisplay = selectedValues
    .map(value => options.find(option => option.value === value)?.label)
    .filter(Boolean)
    .join(', ') || placeholder;

  return (
    <div className={styles.multiSelect} ref={wrapperRef}>
      <div className={styles.dropdown_button} onClick={toggleDropdown}>
        {selectedOptionsDisplay}
      </div>
      {isOpen && (
        <div className={styles.dropdown}>
          <input
            type="text"
            placeholder="Search..."
            value={filterText}
            onChange={e => setFilterText(e.target.value)}
            className={styles.searchInput}
          />
          {filteredOptions.map((option) => (
            <div
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
              className={`${styles.dropdown_item} ${selectedValues.includes(option.value) ? styles.selected : ''}`}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyMultiSelect;
