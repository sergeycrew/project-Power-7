import { ProductCard } from '../ProductsItem/ProductsItem';
import { LiItem, List } from './ProductList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {
  selectProducts,
  selectIsLoading,
  selectMaxPages,
  selectProductsPage,
} from '../../redux/products/productsSelectors';
import { AddProductToDiary } from '../ModalAddProduct/ModalAddProduct';
import { Loader } from '../Loader/Loader';
import { ModalSuccessProduct } from '../ModalSuccessProduct/ModalSuccessProduct';
import { BtnMore } from '../ExercisesList/ExercisesList.styled';
import { changeProductsPage } from '../../redux/products/productListSlice';
import { fetchProducts } from '../../redux/products/productOperations';

export const ProductList = () => {
  const dispatch = useDispatch();

  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoading);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [dairyProduct, setDairyProduct] = useState({
    calories: 0,
  });
  const maxPage = useSelector(selectMaxPages);
  const prodPage = useSelector(selectProductsPage);

  const fetchMoreData = () => {
    dispatch(changeProductsPage(1));
    dispatch(fetchProducts());
  };

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
              <ProductCard product={product} toggleModal={toggleModal} />
            </LiItem>
          );
        })}
        {!isLoading && maxPage !== prodPage && (
          <BtnMore type="button" onClick={() => fetchMoreData()}>
            Load More
          </BtnMore>
        )}
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
