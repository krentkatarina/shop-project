import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "../../styles/Header.module.css";

import { ROUTES } from "../../utils/routes";
import LOGO from "../../styles/images/logo.svg";
import AVATAR from "../../styles/images/avatar.png";
import { useSelector, useDispatch } from "react-redux";
import { toggleForm } from "../../features/user/userSlice";

const Header = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");

  const { currentUser, cart, favourites } = useSelector(({ user }) => user);
  const { list } = useSelector((state) => state.products);

  const [values, setValues] = useState({ name: "Guest", avatar: AVATAR });

  const data = searchValue 
  ? list.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())) 
  : [];

  useEffect(() => {
    if (!currentUser) return;

    setValues(currentUser);
  }, [currentUser]);

  const handleClick = () => {
    if (!currentUser) dispatch(toggleForm(true));
    else navigate(ROUTES.Profile);
  };

  const handleSearch = ({ target: { value } }) => {
    setSearchValue(value);
  };

  return (
    <section className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.Home}>
          <img src={LOGO} alt="logo" />
        </Link>
      </div>

      <div className={styles.info}>
        <div className={styles.user} data-testid='user icon btn' onClick={handleClick}>
          <div
            className={styles.avatar}
            style={{ backgroundImage: `url(${values.avatar})` }}
          />
          <div className={styles.username}>{values.name}</div>
        </div>
        <form className={styles.form}>
          <div className={styles.icon}>
            <svg className="icon">
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
            </svg>
          </div>
          <div className={styles.input}>
            <input
              type="search"
              name="search"
              placeholder="Search for anything..."
              autoComplete="off"
              onChange={handleSearch}
              value={searchValue}
            />
          </div>

          {searchValue && (
            <div className={styles.box}>
              {!data.length
                ? "No results"
                : data.map(({ title, images, id }) => {
                    return (
                      <Link
                        key={id}
                        onClick={() => setSearchValue("")}
                        className={styles.item}
                        to={`/products/${id}`}
                      >
                        <div
                          className={styles.image}
                          style={{ backgroundImage: `url(${images[0]})` }}
                        />
                        <div className={styles.title}>{title}</div>
                      </Link>
                    );
                  })}
            </div>
          )}
        </form>
        <div className={styles.account}>
          <Link to={ROUTES.Favourites} className={styles.cart}>
            <svg className={styles["icon-fav"]}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`} />
            </svg>
            {!!favourites.length && (
              <span className={styles.count}>{favourites.length}</span>
            )}
          </Link>

          <Link to={ROUTES.Cart} className={styles.cart}>
            <svg className={styles["icon-cart"]}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`} />
            </svg>
            {!!cart.length && (
              <span className={styles.count}>{cart.length}</span>
            )}
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Header;
