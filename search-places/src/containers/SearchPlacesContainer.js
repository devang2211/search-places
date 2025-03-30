// SearchPlacesContainer.js
import { useState, useCallback } from 'react';
import { fetchCities } from '../utils/api';

const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const useSearchPlaces = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [limit, setLimit] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
  
    const handleSearch = useCallback(
        debounce(async (query) => {
          if (!query) {
            setData([]);
            setLoading(false);
            return;
          }
          setLoading(true);
          const results = await fetchCities(query, limit);
          setData(results);
          setLoading(false);
        }, 300),
        [limit]
      );
  
    const handleLimitChange = (e) => {
      const value = Math.min(Math.max(parseInt(e.target.value) || 5, 1), 10);
      if (value > 10) {
        alert("Maximum limit is 10");
      }
      setLimit(value);
      setCurrentPage(1); // Reset to first page when limit changes
    };
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    const paginatedData = data.slice((currentPage - 1) * limit, currentPage * limit);
  
    return {
      searchQuery,
      setSearchQuery,
      paginatedData,
      loading,
      limit,
      handleSearch,
      handleLimitChange,
      currentPage,
      handlePageChange,
    };
  };
  
  export default useSearchPlaces;
  