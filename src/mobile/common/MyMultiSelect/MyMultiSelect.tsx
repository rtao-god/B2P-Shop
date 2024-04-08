import React, { useState, useRef, useEffect } from 'react';
import styles from './MyMultiSelect.module.sass';
import Magnifier from '@/components/common/icons/dropdown/Magnifier';
import Cross from '@/components/common/icons/Cross';

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
    return sortedAndFilteredOptions
      .filter(option => option.label.toString().toLowerCase().includes(filterText.toLowerCase()))
      .map((option) => {
        const isPaddingNeeded = option.value === 'womens' || option.value === 'mens';
        const optionClasses = `${styles.dropdown_item} ${selectedValues.includes(option.value) ? styles.selected : ''} ${isPaddingNeeded ? styles.option_with_padding : ''}`;

        return (
          <div
            key={option.value}
            className={optionClasses}
            onClick={() => handleOptionClick(option.value)}
          >
            <div className={styles.flex}>
              {option.label}
            </div>
            {selectedValues.includes(option.value) && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeSelectedValue(option.value);
                }}
                className={styles.icon_deleting_selected_item}
              >
                <Cross color="#FF6635" />
              </button>
            )}
          </div>
        );
      });
  };

  const removeSelectedValue = (valueToRemove: string) => {
    const updatedSelectedValues = selectedValues.filter(value => value !== valueToRemove);
    onChange(updatedSelectedValues);
    prepareOptionsForRender()
  };

  return (
    <div className={styles.multiSelect} ref={wrapperRef}>
      <div className={styles.dropdown_button} onClick={toggleDropdown}>
        {selectedValues.length > 0 ? selectedValues.map(value => {
          const selectedOption = options.find(option => option.value === value);
          const isSpecialOption = selectedOption?.value === 'womens' || selectedOption?.value === 'mens';
          const optionClassNames = isSpecialOption ? `${styles.selected_option} ${styles.special_selected_option}` : styles.selected_option;

          return (
            <span key={value} className={optionClassNames}>
              {selectedOption?.label}
            </span>
          );
        }) : <span>{placeholder}</span>}
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
                setErrorMessage(null);
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
                ? <button onClick={() => setFilterText("")} className={styles.cross_button}>
                  <Cross color="#B1B1B1" />
                </button>
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
