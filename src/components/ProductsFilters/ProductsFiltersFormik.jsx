import {
  fetchProducts,
  fetchProductsCategories,
} from '../../redux/products/productOperations';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/products/productFilterSlice';
import categories from '../../jsonFromBd/productsCategories.json';
import sprite from '../../images/sprite.svg';
import {
  StyledForm,
  Field,
  Select,
  BtnCancel,
  SvgX,
  BtnSearch,
  SvgSearch,
  SelectWrapper,
  // ErrorMessage,
} from './ProductsFilters.styled';
import styles from './ProductsFilter.module.css';

import { useFormik } from 'formik';

export const ProductFilters = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      title: '',
      category: '',
      type: '',
    },
    onSubmit: (values) => handleSubmit(values),
  });

  const handleSubmit = (values) => {
    console.log('paramsSearch', values);
    dispatch(changeFilter(values));
    dispatch(fetchProducts());
  };

  const handleChange = (e) => {
    formik.handleChange(e);
    const { initialValues, values } = formik;
    if (e.target.value !== initialValues[e.target.value]) {
      const paramsSearch = { ...values, [e.target.name]: e.target.value };
      handleSubmit(paramsSearch);
    }
  };

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <Field
        type="text"
        name="title"
        placeholder="Search"
        value={formik.values.title}
        onChange={formik.handleChange}
      />
      {formik.values.title !== '' && (
        <BtnCancel
          type="button"
          onClick={() => {
            formik.setFieldValue('title', '');
            formik.handleSubmit();
          }}
        >
          <SvgX>
            <use href={`${sprite}#icon-x`}></use>
          </SvgX>
        </BtnCancel>
      )}
      <BtnSearch type="submit">
        <SvgSearch>
          <use href={`${sprite}#icon-search`}></use>
        </SvgSearch>
      </BtnSearch>

      <SelectWrapper>
        <Select
          className={styles.prodFilterCategorySlct}
          name="category"
          value={formik.values.category}
          onChange={handleChange}
        >
          <option value="">Categories</option>
          {categories.map((category) => (
            <option key={category._id.$oid} value={category.title}>
              {category.title}
            </option>
          ))}
        </Select>

        <Select
          className={styles.prodFilterCategorySlct}
          name="type"
          value={formik.values.type}
          onChange={handleChange}
        >
          <option value="">All</option>
          <option value="recommended">Recommended</option>
          <option value="not recommended">Not recommended</option>
        </Select>
      </SelectWrapper>
    </StyledForm>
  );
};
