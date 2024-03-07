export const selectProducts = (state) => state.productList.items;
export const selectProductsCount = (state) => state.productList.countItems;
export const selectIsLoading = (state) => state.productList.isLoading;
export const selectError = (state) => state.productList.error;
export const selectFilters = (state) => state.productFilter;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUser = (state) => state.auth.user;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
