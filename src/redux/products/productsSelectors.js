import { createSelector } from '@reduxjs/toolkit';

export const selectProducts = (state) => state.products.items;
export const selectIsLoading = (state) => state.products.isLoading;
export const selectError = (state) => state.products.error;

export const selectCategories = (state) => state.categories.categories;
export const selectCategoriesImg = (state) => state.categories.img;
export const selectCategoriesIsLoading = (state) => state.categories.isLoading;
export const selectFilters = (state) => state.productFilter;
export const selectMaxPages = (state) => state.products.maxPage;
export const selectProductsPage = (state) => state.products.productsPage;

export const selectContainsProducts = createSelector(
  [selectProducts],
  (products) => {
    return products.length > 0;
  }
);
