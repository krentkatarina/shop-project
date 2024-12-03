
import React, { useEffect } from "react";
import { useParams} from "react-router-dom";
import Product from "./Product.js";
import Products from "./Products.js";
import {useDispatch, useSelector} from 'react-redux'
import { getRelatedProducts } from "../../features/products/productsSlice.js";

const SingleProduct = () => {

  const dispatch = useDispatch();
    const { id}  = useParams();
    const {list, related} = useSelector(({products}) => products)
    const data = list.find(product => product.id === parseInt(id));
  
    useEffect(() => {
      if(!data || !list.length) return;

      if(data) {
        dispatch(getRelatedProducts(data.category.id))
      }
    }, [data, dispatch, list.length])



    return !data ? (
      <section className="preloader">No such product</section>
    ) : (
      <>
        <Product {...data}  />
        <Products products={related} amount={5} title="Related products" />
      </>
    )
}

export default SingleProduct;