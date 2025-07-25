import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useSearch from '../hooks/useSearch';
import FavoriteButton from './FavoriteButton';
import { SEARCH_CONFIG } from '../constants/searchConstants';

/**
 * Optimized SearchBox component with onBlur functionality
 */
const SearchBox = ({ className = '' }) => {
  const navigate = useNavigate();
  const { query, searchResults, isSearching, handleSearch } = useSearch();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleResultClick = (path) => {
    navigate(path);
    handleSearch(''); // Clear search after navigation
    setShowDropdown(false);
  };

  const handleInputChange = (e) => {
    handleSearch(e.target.value);
    setShowDropdown(true);
  };

  const handleInputBlur = () => {
    // Delay hiding dropdown to allow clicks on dropdown items
    setTimeout(() => setShowDropdown(false), 150);
  };

  const handleInputFocus = () => {
    if (query) {
      setShowDropdown(true);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onFocus={handleInputFocus}
          placeholder="Search topics..."
          className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        />
        {isSearching && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <div className="animate-spin rounded-full h-3 w-3 border-b border-blue-500"></div>
          </div>
        )}
      </div>
      
      {/* Search Results Dropdown */}
      {query && showDropdown && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {searchResults.length > 0 ? (
            searchResults.slice(0, SEARCH_CONFIG.DROPDOWN_RESULTS).map((result, index) => (
              <div
                key={index}
                className="flex items-center justify-between px-3 py-2 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
              >
                <button
                  onClick={() => handleResultClick(result.path)}
                  className="flex-1 text-left"
                >
                  <div className="text-sm font-medium text-gray-900">{result.title}</div>
                  <div className="text-xs text-gray-500">{result.category}</div>
                </button>
                <FavoriteButton 
                  topic={{
                    id: `${result.category}-${result.title}`.replace(/\s+/g, '-').toLowerCase(),
                    title: result.title,
                    category: result.category,
                    path: result.path
                  }}
                  size="sm"
                />
              </div>
            ))
          ) : (
            <div className="px-3 py-4 text-center text-gray-500">
              <div className="text-sm">No results found</div>
              <div className="text-xs mt-1">Try searching for topics like "JavaScript", "React", or "HTML"</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
