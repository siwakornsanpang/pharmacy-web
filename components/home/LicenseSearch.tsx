'use client';

import { useState } from 'react';
import { Search, SlidersHorizontal, ChevronDown } from 'lucide-react';
import styles from './LicenseSearch.module.css';

const searchOptions = [
  { value: 'license', label: 'เลขที่ใบอนุญาต' },
  { value: 'name', label: 'ชื่อ-นามสกุล' },
  { value: 'pharmacy', label: 'ชื่อร้านยา' },
];

export default function LicenseSearch() {
  const [searchType, setSearchType] = useState('license');
  const [query, setQuery] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const selectedOption = searchOptions.find(o => o.value === searchType)!;

  const handleSearch = () => {
    if (!query.trim()) return;
    // TODO: implement actual search
    console.log('Search:', searchType, query);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>ค้นหารายชื่อ</h2>
        <span className={styles.subtitle}>ผู้ประกอบวิชาชีพเภสัชกรรม</span>
      </div>

      <div className={styles.searchRow}>
        {/* Dropdown */}
        <div className={styles.dropdown}>
          <button
            type="button"
            className={styles.dropdownButton}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <SlidersHorizontal size={16} className={styles.dropdownIcon} />
            <span>{selectedOption.label}</span>
            <ChevronDown size={16} className={styles.chevron} />
          </button>
          {dropdownOpen && (
            <ul className={styles.dropdownMenu}>
              {searchOptions.map(opt => (
                <li key={opt.value}>
                  <button
                    type="button"
                    className={`${styles.dropdownItem} ${opt.value === searchType ? styles.dropdownItemActive : ''}`}
                    onClick={() => {
                      setSearchType(opt.value);
                      setDropdownOpen(false);
                    }}
                  >
                    {opt.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Search input */}
        <div className={styles.inputWrap}>
          <Search size={18} className={styles.inputIcon} />
          <input
            type="text"
            className={styles.input}
            placeholder={`ค้นหา${selectedOption.label}`}
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSearch()}
          />
        </div>

        {/* Search button */}
        <button
          type="button"
          className={styles.searchButton}
          onClick={handleSearch}
        >
          ค้นหา
        </button>
      </div>
    </div>
  );
}
