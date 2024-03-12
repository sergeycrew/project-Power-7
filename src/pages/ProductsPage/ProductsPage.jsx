import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProducts,
  fetchCategories,
} from '../../redux/products/productOperations';
import { selectContainsProducts } from '../../redux/products/productsSelectors';

import { ProductsFilters } from '../../components/ProductsFilters/ProductsFilters';
import { ProductList } from '../../components/ProductList/ProductList';
import { ProductListEmpty } from '../../components/ProductListEmpty/ProductListEmpty';

import * as s from './ProductsPage.styled';
import { ProductsBackground } from '../../components/ProductsBg/ProductsBg';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const containsProducts = useSelector(selectContainsProducts);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <ProductsBackground>
      <s.Container>
        <s.WrapperFilters>
          <s.Title>Products</s.Title>
          <ProductsFilters />
        </s.WrapperFilters>
        {containsProducts ? <ProductList /> : <ProductListEmpty />}
      </s.Container>
    </ProductsBackground>
  );
};

export default ProductsPage;
