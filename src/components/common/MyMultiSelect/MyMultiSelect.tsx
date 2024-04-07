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
  const [justClosed, setJustClosed] = useState(false);
  const [filterText, setFilterText] = useState('');
  const [filteredOptions, setFilteredOptions] = useState<OptionType[]>(options);
  const [errorMessage, setErrorMessage] = useState<string | null>(null); 
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setJustClosed(true);
        setErrorMessage(null); 
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (!isOpen && justClosed) {
      const selectedOptions = options.filter(option => selectedValues.includes(option.value));
      const nonSelectedOptions = options.filter(option => !selectedValues.includes(option.value));
      setFilteredOptions([...selectedOptions, ...nonSelectedOptions]);
      setJustClosed(false);
    } else if (isOpen && justClosed) {
      setJustClosed(false);
    }
  }, [isOpen, justClosed, options, selectedValues]);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setErrorMessage(null);
  };

  const handleOptionClick = (value: string) => {
    if (enforceSelectionLimit && selectedValues.length >= maxSelections && !selectedValues.includes(value)) {
      setErrorMessage(`Можно добавить не более ${maxSelections} размеров.`);
      return;
    } else {
      setErrorMessage(null);
    }

    const isCurrentlySelected = selectedValues.includes(value);
    let updatedSelectedValues = isCurrentlySelected
      ? selectedValues.filter(v => v !== value)
      : [...selectedValues, value];

    onChange(updatedSelectedValues);
  };

  const selectedOptionsDisplay = selectedValues
    .map(value => {
      const foundOption = options.find(option => option.value === value);
      if (!foundOption) return null;

      if (typeof foundOption.label === 'string') {
        return foundOption.label;
      }

      return foundOption.label.props.children[1];
    })
    .filter(Boolean)
    .join(', ') || placeholder;

  const prepareOptionsForRender = () => {
    return filteredOptions.map((option) => (
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
        {selectedOptionsDisplay}
      </div>
      {isOpen && (
        <div className={styles.dropdown}>
          <input
            type="text"
            placeholder="Поиск..."
            value={filterText}
            onChange={e => setFilterText(e.target.value)}
            className={styles.searchInput}
          />
          {errorMessage && <div className={styles.error_message}>{errorMessage}</div>}
          {prepareOptionsForRender()}
        </div>
      )}
    </div>
  );
};

export default MyMultiSelect;
