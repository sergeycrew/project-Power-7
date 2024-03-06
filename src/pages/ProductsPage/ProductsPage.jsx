import { ProductList } from '../../components/ProductList/ProductList';
//import { ProductFilters } from '../../components/ProductsFilters/ProductsFilters';
import * as s from './ProductsPage.styled';

const ProductsPage = () => {
  return (
    <div>
      <s.Container>
        <s.Title>Products</s.Title>
        {/* <ProductFilters /> */}
      </s.Container>
      <ProductList />
    </div>
  );
};

export default ProductsPage;
