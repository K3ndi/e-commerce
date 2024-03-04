import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from 'react-icons/ai';
import { dropdownMenu } from '../../data/headerData';
import AccountForm from '../form/AccountForm';
import SearchBar from './SearchBar';
import { useAppSelector } from '../../store/hooks';
import {
  selectFormUserInfo,
  toggleForm,
  toggleSearch,
} from '../../store/shared/shared.slice';
import { useDispatch } from 'react-redux';

const Header: React.FC = () => {
  const formUserInfo = useAppSelector(selectFormUserInfo);

  const dispatch = useDispatch();
  const [isSticky, setIsSticky] = useState(false);

  const onToggleForm = (): void => {
    dispatch(toggleForm(true));
  };

  const onToggleSearch = (): void => {
    dispatch(toggleSearch(true));
  };

  // handle the sticky-header
  useEffect(() => {
    const handleIsSticky = (): void =>
      window.scrollY >= 50 ? setIsSticky(true) : setIsSticky(false);

    window.addEventListener('scroll', handleIsSticky);

    return () => {
      window.removeEventListener('scroll', handleIsSticky);
    };
  }, [isSticky]);

  const cartQuantity = 3;

  return (
    <>
      <header id="header" className={isSticky ? 'sticky' : ''}>
        <div className="container">
          <div className="navbar">
            <h2 className="nav_logo">
              <Link to="/">Tech Zone</Link>
            </h2>
            <nav className="nav_actions">
              <div className="search_action">
                <span onClick={onToggleSearch}>
                  <AiOutlineSearch />
                </span>
                <div className="tooltip">Search</div>
              </div>

              <div className="cart_action">
                <Link to="/cart">
                  <AiOutlineShoppingCart />
                  {cartQuantity > 0 && (
                    <span className="badge">{cartQuantity}</span>
                  )}
                </Link>
                <div className="tooltip">Cart</div>
              </div>

              <div className="user_action">
                <span>
                  <AiOutlineUser />
                </span>
                <div className="dropdown_menu">
                  <h4>
                    Hello!{' '}
                    {formUserInfo && <Link to="*">&nbsp;{formUserInfo}</Link>}
                  </h4>
                  <p>Access account and manage orders</p>
                  {!formUserInfo && (
                    <button type="button" onClick={onToggleForm}>
                      Login / Signup
                    </button>
                  )}
                  <div className="separator"></div>
                  <ul>
                    {dropdownMenu.map((item) => {
                      const { id, link, path } = item;
                      return (
                        <li key={id}>
                          <Link to={path}>{link}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <SearchBar />
      <AccountForm />
    </>
  );
};

export default Header;
