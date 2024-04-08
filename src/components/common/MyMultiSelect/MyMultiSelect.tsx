import React, { useState, useRef, useEffect } from 'react';
import styles from './MyMultiSelect.module.sass';
import Magnifier from '../icons/dropdown/Magnifier';
import Cross from '../icons/Cross';

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
  const [sortedAndFilteredOptions, setSortedAndFilteredOptions] = useState<OptionType[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    if (!isOpen) {
      const filtered = options.filter(option =>
        option.label.toString().toLowerCase().includes(filterText.toLowerCase())
      );

      const sorted = filtered.sort((a, b) => {
        const isSelectedA = selectedValues.includes(a.value) ? -1 : 1;
        const isSelectedB = selectedValues.includes(b.value) ? -1 : 1;
        return isSelectedA - isSelectedB;
      });

      setSortedAndFilteredOptions(sorted);
    }

    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value: string) => {
    if (enforceSelectionLimit && selectedValues.length >= maxSelections && !selectedValues.includes(value)) {
      setErrorMessage(`Вы можете выбрать не более ${maxSelections} размеров.`);
      return;
    } else {
      setErrorMessage(null);
    }

    const updatedSelectedValues = selectedValues.includes(value)
      ? selectedValues.filter(v => v !== value)
      : [...selectedValues, value];

    onChange(updatedSelectedValues);
  };

  const prepareOptionsForRender = () => {
    return sortedAndFilteredOptions.map((option) => (
      <div
        key={option.value}
        onClick={() => handleOptionClick(option.value)}
        className={`${styles.dropdown_item} ${selectedValues.includes(option.value) ? styles.selected : ''}`}
        style={{ backgroundColor: selectedValues.includes(option.value) ? '#EDF4FC' : 'initial' }}
      >
        {option.label}
      </div>
    ));
  };

  return (
    <div className={styles.multiSelect} ref={wrapperRef}>
      <div className={styles.dropdown_button} onClick={toggleDropdown}>
        {selectedValues.length > 0 ? selectedValues.map(value => (
          <span key={value} className={styles.selected_option}>{options.find(option => option.value === value)?.label}</span>
        )) : <span>{placeholder}</span>}
      </div>
      {isOpen && (
        <div className={styles.dropdown}>
          <div className={styles.search_button}>
            <input
              type="text"
              placeholder="Поиск..."
              value={filterText}
              onChange={(e) => {
                setFilterText(e.target.value);
                setErrorMessage(null); // Сброс сообщения об ошибке при изменении текста
                const filtered = options.filter(option =>
                  option.label.toString().toLowerCase().includes(e.target.value.toLowerCase())
                );
                const sorted = filtered.sort((a, b) => {
                  const isSelectedA = selectedValues.includes(a.value) ? -1 : 1;
                  const isSelectedB = selectedValues.includes(b.value) ? -1 : 1;
                  return isSelectedA - isSelectedB;
                });
                setSortedAndFilteredOptions(sorted);
              }}
              className={`${styles.search_input} ${filterText ? styles.search_input_active : ''}`}
            />
            <div className={styles.search_input_icons}>
              {filterText
                ? <Cross />
                : <Magnifier />
              }
            </div>
          </div>
          {errorMessage && <div className={styles.error_message}>{errorMessage}</div>}
          {prepareOptionsForRender()}
        </div>
      )}
    </div>
  );
};

export default MyMultiSelect;
