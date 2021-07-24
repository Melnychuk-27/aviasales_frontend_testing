import React from 'react';

import './filter-tickets.css' 

const filterButtons = [
  { name: 'cheap', label: 'Самый дешевый' },
  { name: 'fast', label: 'Самый быстрый' },

];

function  FilterTickets ({filter, onFilterChange}) {
  const buttons = filterButtons.map(({name, label}) => {
    const isActive = name === filter;
    const classNames = isActive ? 'btn-active' : 'btn';
    return (
      <button key={name}
              type="button"
              onClick={() => onFilterChange(name)}
              className={classNames}>{label.toUpperCase()}</button>
    );
  });

  return (
    <div className="btn-group">
      { buttons }
    </div>
  );
};

export default FilterTickets;
