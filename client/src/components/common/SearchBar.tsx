import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import productsData from '../../data/productsData';
import useOutsideClose from '../../hooks/useOutsideClose';
import useScrollDisable from '../../hooks/useScrollDisable';
// import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar: React.FC = () => {
  const searchRef = useRef(null);

  const isSearchOpen = false;

  const searchResults: any[] = [];
  // closing the SearchBar
  const closeSearch = (): void => {
    console.log('ERE');
  };

  useOutsideClose(searchRef, closeSearch);

  useScrollDisable(true);

  // handling Search
  const handleSearching = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const searchedTerm = e.target.value.toLowerCase().trim();

    const updatedSearchResults = productsData.filter((item) =>
      item.title.toLowerCase().includes(searchedTerm),
    );

    searchedTerm === '' ? console.log('here') : console.log('here');
  };

  return (
    <>
      {isSearchOpen && (
        <div id="searchbar" className="backdrop">
          <div className="searchbar_content" ref={searchRef}>
            <div className="search_box">
              <input
                type="search"
                className="input_field"
                placeholder="Search for product..."
                onChange={handleSearching}
              />
              {/* <button
                                    type="button"
                                    className="btn"
                                    disabled={searchResults.length === 0}
                                >
                                    <AiOutlineSearch />
                                </button> */}
            </div>

            {searchResults.length !== 0 && (
              <div className="search_results">
                {searchResults.map((item) => {
                  const { id, title, path } = item;
                  return (
                    <Link to={`${path}${id}`} onClick={closeSearch} key={id}>
                      {title}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;
