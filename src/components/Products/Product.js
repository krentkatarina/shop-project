
import React, { useEffect, useState } from "react";
import styles from '../../styles/Product.module.css'
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { useDispatch} from 'react-redux'
import { addItemToCart, addItemToFavourites } from "../../features/user/userSlice";

const SIZES = [4, 4.5 ,5]

const Product = (item) => {

    const {title, price, images, description} =  item 
    const dispatch = useDispatch();

    const [currentImage, setCurrentImage] = useState();
    const [currentSize, setCurrentSize] = useState();
     useEffect(() => {
        if(!images.length) return;

        setCurrentImage(images[0])
     }, [images])

     const addToCart = () => {
        dispatch(addItemToCart(item))
     }

     const addToFavoutites = () => {
        dispatch(addItemToFavourites(item))
     }

    return (
        <section className={styles.product}>
        <div className={styles.images}>
          <div
            className={styles.current}
            style={{ backgroundImage: `url(${currentImage})` }}
          />
          <div className={styles["images-list"]}>
            {images.map((image, i) => (
              <div
                key={i}
                className={styles.image}
                style={{ backgroundImage: `url(${image})` }}
                onClick={() => setCurrentImage(image)}
              />
            ))}
          </div>
        </div>
        <div className={styles.info}>
          <h1 className={styles.title} data-testid='product title'>{title}</h1>
          <div className={styles.price}>{price}$</div>
          <div className={styles.color}>
            <span>Color:</span> Random
          </div>
          <div className={styles.sizes}>
            <span>Sizes:</span>
  
            <div className={styles.list}>
              {SIZES.map((size) => (
                <div
                onClick={() => setCurrentSize(size)}
                  className={`${styles.size} ${currentSize === size ? styles.active : ''}` }
                  key={size}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
  
          <p className={styles.description}>{description}</p>
  
          <div className={styles.actions}>
            <button
                disabled={!currentSize}
              className={styles.add}
              onClick={addToCart}
            >
              Add to cart
            </button>
            <button 
                
            className={styles.favourite} onClick={addToFavoutites}>Add to favourites</button>
          </div>
  
          <div className={styles.bottom}>
            <div className={styles.purchase}>19 people purchased</div>
  
            <Link to={ROUTES.Home}>Return to store</Link>
          </div>
        </div>
      </section>
    ) 
}

export default Product;