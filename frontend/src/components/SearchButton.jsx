import { Search } from '@mui/icons-material';
import React, { useState } from 'react';

const SearchButton = () => {
  const [isInputVisible, setInputVisible] = useState(false);

  const toggleInput = () => {
    setInputVisible(!isInputVisible);
  };

  const handleOutsideClick = (event) => {
    if (event.target.closest('.search-container')) return; // Check if the click is inside the search container
    setInputVisible(false);
  };

  // Attach click event listener to the document
  React.useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative search-container flex items-center space-x-2">
      {isInputVisible ? (
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onBlur={() => setInputVisible(false)} 
        />
      ) : (
        <button 
            onClick={() => {
                toggleInput
                console.log('Search clicked');
            }}
           className="flex items-center">
          <Search />
        </button>
      )}
      {isInputVisible && (
        <button
          onClick={() => {
            console.log('Search clicked');
          }}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Search
        </button>
      )}
    </div>
  );
};

export default SearchButton;