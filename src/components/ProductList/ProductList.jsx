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
import {ModalSuccessProduct} from '../ModalSuccessProduct/ModalSuccessProduct'

export const ProductList = () => {


  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoading);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [dairyProduct, setDairyProduct] = useState({
    calories: 0,
  });


  const toggleModal = (product) => {
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
              <ProductCard product={product}
                toggleModal={toggleModal}
              />
            </LiItem>
          );
        })}
      </List>
      {isModalOpen && (
        <AddProductToDiary
          onToggle={toggleModal}
          setIsSuccessOpen={() => setIsSuccessOpen((prevState) => !prevState)}
          exerciseInfo={selectedProduct}
          setDairyProduct={setDairyProduct}
        />
      )}
      {isSuccessOpen && (
        <ModalSuccessProduct
          onClose={() => setIsSuccessOpen((prevState) => !prevState)}
          calories={dairyProduct.calories}
        />
      )}
    </div>
  );
};
