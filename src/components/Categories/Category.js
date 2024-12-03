import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import styles from "../../styles/Category.module.css";

import Products from "../Products/Products";
import { categoriesMockValues as list } from "./CategoriesMockValues";
import { filterProducts } from "../../features/products/productsSlice.js";

const Category = () => {
  const [perPage, setPerPage] = useState(5);
  const {filtered} = useSelector((state) => state.products);
  const data = filtered.slice(0, perPage)
  const { id } = useParams();
  const dispatch = useDispatch();

  const defaultValues = {
    title: "",
    price_min: 0,
    price_max: 0,
  };

  const [values, setValues] = useState(defaultValues);

  useEffect(() => {
    dispatch(filterProducts({ ...values, id }));
  }, [dispatch, values, id]);

  const isLoading = false;
  const isSuccess = true;
  const isShowMore = perPage < filtered.length
  const category = list.find((item) => item.id === id);

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleReset = () => {
    setValues(defaultValues);
    setPerPage(5);
  };

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>{category}</h2>

      <form className={styles.filters} onSubmit={handleSubmit}>
        <div className={styles.filter}>
          <input
            type="number"
            name="price_min"
            onChange={handleChange}
            placeholder="0"
            value={values.price_min}
          />
          <span>Price from</span>
        </div>
        <div className={styles.filter}>
          <input
            type="number"
            name="price_max"
            onChange={handleChange}
            placeholder="0"
            value={values.price_max}
          />
          <span>Price to</span>
        </div>

        <button type="submit" hidden />
      </form>

      {isLoading ? (
        <div className="preloader">Loading...</div>
      ) : !isSuccess || !data.length ? (
        <div className={styles.back}>
          <span>No results</span>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : (
        <Products
          title=""
          products={data}
          style={{ padding: 0 }}
          amount={data.length}
        />
      )}

      {isShowMore && (
        <div className={styles.more}>
          <button onClick={() => setPerPage((prev) => prev + 5)}>
            See more
          </button>
        </div>
      )}
    </section>
  );
};

export default Category;
