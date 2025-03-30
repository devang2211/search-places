import React from 'react';

const Table = ({ data, loading, searchQuery }) => {
  if (loading) return <div className="spinner">Loading...</div>;
  if (!searchQuery) return <div className="no-results">Start searching</div>;
  if (data.length === 0) return <div className="no-results">No result found</div>;

  return (
    <table className="places-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Place Name</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={item.id}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>
              <img
                src={`https://flagsapi.com/${item.countryCode}/flat/24.png`}
                alt={`${item.country} flag`}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
