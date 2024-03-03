import products from '../../jsonFromBd/products.json';
import { ProductCard } from '../ProductsItem/ProductsItem';
import { List } from './ProductList.styled';

export const ProductList = () => {
  return (
    <List>
      {products.map((product) => (
        <li key={product._id.$oid}>
          <ProductCard product={product} />
        </li>
      ))}
    </List>
  );
};
