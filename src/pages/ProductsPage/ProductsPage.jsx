import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProducts,
  fetchCategories,
} from '../../redux/products/productOperations';
import {
  selectIsLoading,
  selectProducts,
} from '../../redux/products/productsSelectors';

import { ProductsFilters } from '../../components/ProductsFilters/ProductsFilters';
import { ProductList } from '../../components/ProductList/ProductList';
import { ProductListEmpty } from '../../components/ProductListEmpty/ProductListEmpty';

import * as s from './ProductsPage.styled';
import { Container } from 'styles/container';
import { ProductsBackground } from '../../components/ProductsBg/ProductsBg';
import { changeProductsReset } from '../../redux/products/productListSlice';
import { LoaderTransp } from '../../components/LoadeTrans/LoaderTrans';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const containsProducts = useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(changeProductsReset());

    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <ProductsBackground>
      <s.WrapperPagePadding>
        <Container>
          <s.WrapperFilters>
            <s.Title>Products</s.Title>
            <ProductsFilters />
          </s.WrapperFilters>
          {isLoading && (
            <LoaderTransp positionPc={{ transform: 'translateX(-16%)' }} />
          )}
          {containsProducts.length === 0 && !isLoading && <ProductListEmpty />}
          {containsProducts.length > 0 && <ProductList />}
        </Container>
      </s.WrapperPagePadding>
    </ProductsBackground>
  );
};

export default ProductsPage;
