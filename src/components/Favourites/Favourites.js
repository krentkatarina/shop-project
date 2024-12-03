import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromFavourites } from "../../features/user/userSlice";

import styles from "../../styles/Favourites.module.css";

const Favourites = () => {
  const dispatch = useDispatch();
  const { favourites } = useSelector((state) => state.user);
  const [removingItemId, setRemovingItemId] = useState(null); 

  const removeItem = (id) => {
    setRemovingItemId(id); 
    setTimeout(() => {
      dispatch(removeItemFromFavourites(id));
    }, 300); 
  };

  return (
    <section className={styles.cart}>
      <h2 className={styles.title}>Your favourites</h2>

      {!favourites.length ? (
        <div className={styles.empty}>Here is empty</div>
      ) : (
        <>
          <div className={styles.list}>
            {favourites.map((item) => {
              const { title, category, images, price, id } = item;
              const isRemoving = removingItemId === id; 

              return (
                <div
                  className={`${styles.item} ${isRemoving && styles.removing}`}
                  key={id}
                >
                  <div
                    className={styles.image}
                    style={{ backgroundImage: `url(${images[0]})` }}
                  />
                  <div className={styles.info}>
                    <h3 className={styles.name}>{title}</h3>
                    <div className={styles.category}>{category.name}</div>
                  </div>

                  <div className={styles.price}>{price}$</div>
                  <div
                    className={styles.close}
                    onClick={() => removeItem(item.id)}
                  >
                    <svg className="icon">
                      <use
                        xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`}
                      />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </section>
  );
};

export default Favourites;