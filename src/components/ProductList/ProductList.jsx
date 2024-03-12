import { ProductCard } from '../ProductsItem/ProductsItem';
import { List } from './ProductList.styled';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { selectProducts } from '../../redux/products/productsSelectors';



import { AddProductToDiary } from '../ModalAddProduct/ModalAddProduct';

export const ProductList = () => {
  const products = useSelector(selectProducts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const toggleModal = (product) => {
    setIsModalOpen((prevState) => !prevState);
    setSelectedProduct(product);
  };
  return (

    <div>
      <List>
        {products.map((product) => {
          return (
            <li key={product._id}>
              <ProductCard product={product}
                toggleModal={toggleModal}
              />
            </li>
          );
        })}
      </List>
      {isModalOpen && (
        <AddProductToDiary
          onToggle={toggleModal}
          exerciseInfo={selectedProduct}
        />
      )}
    </div>

  );
};
