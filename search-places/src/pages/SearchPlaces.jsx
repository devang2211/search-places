import React, { useEffect } from 'react';
import useSearchPlaces from '../containers/SearchPlacesContainer';
import SearchBox from '../components/SearchBox';
import Table from '../components/Table';
import Pagination from '../components/Pagination';

const SearchPlaces = () => {
  const { searchQuery, setSearchQuery, paginatedData = [], loading, limit, handleSearch, handleLimitChange } = useSearchPlaces();

  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
    handleSearch(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(searchQuery);
    }
  };

  // Keyboard shortcut to focus the search box (CTRL/CMD + /)
  useEffect(() => {
    const handleShortcut = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === '/') {
        const searchBox = document.getElementById('searchBox');
        if (searchBox) {
          searchBox.focus();
        }
        e.preventDefault();
      }
    };
    window.addEventListener('keydown', handleShortcut);
    return () => {
      window.removeEventListener('keydown', handleShortcut);
    };
  }, []);

  return (
    <div className="search-places">
      <h2>Search Places</h2>
      <SearchBox 
        query={searchQuery} 
        handleSearch={handleSearchInput} 
        handleKeyPress={handleKeyPress} 
      />
      <Table data={paginatedData} loading={loading} searchQuery={searchQuery} />
      {paginatedData.length > 0 && (  // Only show pagination if there are results
        <Pagination data={paginatedData} limit={limit} onLimitChange={handleLimitChange} />
      )}
    </div>
  );
};

export default SearchPlaces;

