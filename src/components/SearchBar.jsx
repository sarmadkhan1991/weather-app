// components/SearchBar.jsx
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ onSearch }) => {
  const [zipCode, setZipCode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate ZIP code (5 digits for US)
    const zipPattern = /^\d{5}$/;
    if (!zipPattern.test(zipCode)) {
      setError('Please enter a valid 5-digit ZIP code');
      return;
    }
    
    setError('');
    onSearch(zipCode);
  };

  return (
    <div className="rounded-full bg-white m-5 shadow-2xs">
      <form className="flex flex-row justify-between" onSubmit={handleSubmit}>
        <input
          type="text"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          placeholder="ZIP Code"
          maxLength="5"
          className="text-gray-500 pl-4 font-bold outline-none"
        />
        <button type="submit" className="m-2 rounded-full box-border size-12 bg-violet-900 text-white justify-items-center">
          <FaSearch />
        </button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default SearchBar;