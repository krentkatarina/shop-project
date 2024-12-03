
import React, { useEffect, useRef } from "react";
import {useDispatch, useSelector} from 'react-redux'
import Poster from '../Poster/Poster.js';
import Products from "../Products/Products.js";
import Categories from "../Categories/Categories.js";
import Banner from "../Banner/Banner.js";
import { filterProducts } from "../../features/products/productsSlice.js";
import { categoriesMockValues } from "../Categories/CategoriesMockValues.js";

const Home = () => {
    const dispatch = useDispatch();
    const { list, filtered } = useSelector((state) => state.products)

    useEffect(() => {
        if(!list.length) return;

        dispatch(filterProducts({payload: {max: 100}}))
    }, [dispatch, list.length]);

    const moreRef = useRef(null);

    const scrollToMore = () => {
        if (moreRef && moreRef.current) {
            moreRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
       <>
        <Poster/>
        <Products products={list} amount={5} title="Trending"  />
        <Categories products={categoriesMockValues} amount={5} title="Worth seeing"  />
        <Banner scrollToMore={scrollToMore}  /> 
        <Products products={filtered} amount={5} title="Less than 100$"  />
        <div ref={moreRef}> 
            <Products products={list} amount={50} title="More"  />
        </div>
       </>
    ) 
}

export default Home;