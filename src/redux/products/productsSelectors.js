export const selectProducts = (state) => state.products.items;
export const selectContainsProducts = (state) =>
  state.products.containsProducts;
export const selectIsLoading = (state) => state.products.isLoading;
export const selectError = (state) => state.products.error;

export const selectCategories = (state) => state.categories.categories;
export const selectCategoriesIsLoading = (state) => state.categories.isLoading;

export const selectFilters = (state) => state.productFilter;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUser = (state) => state.auth.user;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
