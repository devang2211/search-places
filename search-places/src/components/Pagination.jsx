import React from 'react';

const Pagination = ({ data, limit, onLimitChange }) => {
  if (data.length === 0) return null;

  return (
    <div className="pagination-box">
      <input
        type="number"
        min="1"
        max="10"
        value={limit}
        onChange={onLimitChange}
        className="limit-input"
        placeholder="Limit"
      />
    </div>
  );
};

export default Pagination;
