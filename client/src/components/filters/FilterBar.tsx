import React from 'react';
import { BiSort, BiFilterAlt } from 'react-icons/bi';
import FilterBarOptions from './FilterBarOptions';

const FilterBar: React.FC = () => {
  const handleMobSortVisibility = (): void => {
    console.log('JERE');
  };

  return (
    <>
      {/*===== Filterbar-default =====*/}
      <aside id="filterbar">
        <div className="filterbar_wrapper">
          <FilterBarOptions />
        </div>
      </aside>

      {/*===== Filterbar-mobile =====*/}
      <div id="filterbar_mob">
        <div className="filterbar_mob_wrapper">
          <h3 className="title" onClick={handleMobSortVisibility}>
            <BiSort />
            <span>Sort</span>
          </h3>
          <span>|</span>
          <h3 className="title" onClick={handleMobSortVisibility}>
            <BiFilterAlt />
            <span>Filter</span>
          </h3>
        </div>
        <FilterBarOptions />
      </div>
    </>
  );
};

export default FilterBar;
