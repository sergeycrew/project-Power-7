import { ProductCard } from '../ProductsItem/ProductsItem';
import { List } from './ProductList.styled';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../redux/products/productsSelectors';

export const ProductList = () => {
  const products = useSelector(selectProducts);
  return (
    <List>
      {products.map((product) => {
        return (
          <li key={product._id}>
            <ProductCard product={product} />
          </li>
        );
      })}
    </List>
  );
};
