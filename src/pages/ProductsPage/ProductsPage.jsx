import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/products/productOperations';
import { selectIsLoading } from '../../redux/products/productsSelectors';

import { ProductList } from '../../components/ProductList/ProductList';
import { ProductFilters } from '../../components/ProductsFilters/ProductsFilters';
import * as s from './ProductsPage.styled';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <s.Container>
        <s.Title>Products</s.Title>
        <ProductFilters />
      </s.Container>
      <ProductList />
    </div>
  );
};

export default ProductsPage;
