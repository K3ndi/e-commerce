import React from 'react';
import { sortMenu } from '../../data/filterBarData';
import { displayMoney } from '../../helpers/utils';

const FilterBarOptions: React.FC = () => {
  const displayPrice = displayMoney(21);
  const sortedValue = '';

  const handleClearFilters = (): void => {
    console.log('dfskfds');
  };

  const isMobSortVisible = false;

  const updatedBrandsMenu: any[] = [];

  return (
    <>
      {/*===== Clear-Filters btn =====*/}
      {sortedValue && (
        <div className="clear_filter_btn">
          <button type="button" className="btn" onClick={handleClearFilters}>
            Clear Filters
          </button>
        </div>
      )}

      {/*===== Sort-menu =====*/}
      <div className={`sort_options ${isMobSortVisible ? 'show' : ''}`}>
        <div className="sort_head">
          <h3 className="title">Sort By</h3>
          <button
            type="button"
            className="close_btn"
            onClick={handleClearFilters}
          >
            &times;
          </button>
        </div>

        <div className="separator"></div>

        <ul className="sort_menu">
          {sortMenu.map((item) => {
            const { id, title } = item;
            return (
              <li
                key={id}
                className={sortedValue === title ? 'active' : ''}
                onClick={handleClearFilters}
              >
                {title}
              </li>
            );
          })}
        </ul>
      </div>

      {/*===== Filter-menu =====*/}
      <div className={`filter_options ${isMobSortVisible ? 'show' : ''}`}>
        <div className="filter_head">
          <h3 className="title">Filter By</h3>
          <button
            type="button"
            className="close_btn"
            onClick={handleClearFilters}
          >
            &times;
          </button>
        </div>

        <div className="separator"></div>

        {/* Filter by Brands */}
        <div className="filter_block">
          <h4>Brands</h4>
          <ul className="filter_menu">
            {updatedBrandsMenu.map((item) => {
              const { id, checked, label } = item;
              return (
                <li key={id} className="filter_btn">
                  <input
                    type="checkbox"
                    id={label}
                    value={label}
                    checked={checked}
                    onChange={handleClearFilters}
                  />
                  <label htmlFor={label}>{label}</label>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Filter by Category */}
        <div className="filter_block">
          <h4>Category</h4>
          <ul className="filter_menu">
            {updatedBrandsMenu.map((item) => {
              const { id, checked, label } = item;
              return (
                <li key={id} className="filter_btn">
                  <input
                    type="checkbox"
                    id={label}
                    value={label}
                    checked={checked}
                    onChange={handleClearFilters}
                  />
                  <label htmlFor={label}>{label}</label>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Filter by Price */}
        <div className="filter_block">
          <h4>Price</h4>
          <div className="price_filter">
            <p>{displayPrice}</p>
            <input
              type="range"
              min={12}
              max={31}
              value={3}
              onChange={handleClearFilters}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterBarOptions;
