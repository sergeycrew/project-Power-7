import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/products/productOperations';
import {
  selectIsLoading,
  selectContainsProducts,
} from '../../redux/products/productsSelectors';

// import { ProductFilters } from '../../components/ProductsFilters/ProductsFilters';
import { ProductFilters } from '../../components/ProductsFilters/ProductsFiltersFormik';
import { ProductList } from '../../components/ProductList/ProductList';
import { ProductListEmpty } from '../../components/ProductListEmpty/ProductListEmpty';

import * as s from './ProductsPage.styled';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const containsProducts = useSelector(selectContainsProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <s.Container>
      <s.Wrapper>
        <s.Title>Products</s.Title>
        <ProductFilters />
      </s.Wrapper>
      {containsProducts ? <ProductList /> : <ProductListEmpty />}
    </s.Container>
  );
};

export default ProductsPage;
