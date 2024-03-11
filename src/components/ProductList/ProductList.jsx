import { ProductCard } from '../ProductsItem/ProductsItem';
import { LiItem, List } from './ProductList.styled';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import {
  selectProducts,
  selectIsLoading,
} from '../../redux/products/productsSelectors';
import { AddProductToDiary } from '../ModalAddProduct/ModalAddProduct';
import { Loader } from '../Loader/Loader';

export const ProductList = () => {
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoading);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const toogleModal = (product) => {
    setIsModalOpen((prevState) => !prevState);
    setSelectedProduct(product);
  };
  return (
    <div>
      {isLoading && <Loader />}
      <List>
        {products.map((product) => {
          return (
            <LiItem key={product._id}>
              <ProductCard product={product} toogleModal={toogleModal} />
            </LiItem>
          );
        })}
      </List>
      {isModalOpen && (
        <AddProductToDiary
          onToogle={toogleModal}
          exerciseInfo={selectedProduct}
        />
      )}
    </div>
  );
};
