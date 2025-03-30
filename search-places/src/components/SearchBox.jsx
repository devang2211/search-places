const SearchBox = ({ query, handleSearch, handleKeyPress }) => {
    return (
        <input
        id="searchBox"
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleSearch}
        onKeyPress={handleKeyPress}
        className="search-box"
      />      
    );
  };
  
  export default SearchBox;