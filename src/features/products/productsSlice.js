import { createSlice } from "@reduxjs/toolkit"

import { shuffle } from "../../utils/common";
import { productsMockValues } from "../../components/Products/ProductsMockValues";

const productsSlice = createSlice({
    name: 'getProducts',
    initialState: {
        list: productsMockValues,
        filtered: [],
        related: [],
        isLoading: false
    },
    reducers: {
        filterProducts: (state, action) => {
            const { price_min = 0, price_max = 0, title, id } = action.payload;
            const minPrice = parseInt(price_min);
            const maxPrice = parseInt(price_max);
            const categoryId = parseInt(id);
            
            state.filtered = state.list.filter((item) => {
                const isCategoryMatch = categoryId ? item.category.id === categoryId : true;
                const isPriceMatch = (!maxPrice || item.price <= maxPrice) && item.price >= minPrice;
                const isTitleMatch = !title || item.title === title;
                
                return isCategoryMatch && isPriceMatch && isTitleMatch;
            });
        },
        getRelatedProducts:  (state, {payload }) => {
            const list = state.list.filter(({ category: {id}}) => id === payload);
            state.related =  shuffle(list);
        },
    }
});


export const { filterProducts, getRelatedProducts} = productsSlice.actions;
export default productsSlice.reducer;


