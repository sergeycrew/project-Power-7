import { fetchProducts } from '../../redux/products/productOperations';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/products/filterSlice';
import { useFormik } from 'formik';
import Select from 'react-select';
import sprite from '../../images/sprite.svg';
import {
  StyledForm,
  Field,
  BtnCancel,
  SvgX,
  BtnSearch,
  SvgSearch,
  SelectWrapper,
  FormTitle,
  // ErrorMessage,
} from './ProductsFilters.styled';
import { SelectStyles } from './ProductSelectStyles';
import { selectCategories } from '../../redux/products/productsSelectors';
import { RecommendedOptions } from '../../redux/products/constants';
import { changeProductsReset } from '../../redux/products/productListSlice';

export const ProductsFilters = () => {
  const dispatch = useDispatch();

  const CalegoriesOptions = useSelector(selectCategories);

  const validate = (values) => {
    const errors = {};

    if (values.title && values.title.length < 2) {
      errors.title = 'Мust be longer than 2 characters';
    }
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      category: '',
      type: '',
    },
    validate,
    onSubmit: (values) => handleSubmit(values),
  });

  const defaultValue = (options, value) => {
    return options ? options.find((option) => option.value == value) : '';
  };

  const handleSubmit = (values) => {
    dispatch(changeFilter(values));    
    dispatch(changeProductsReset());
    dispatch(fetchProducts());

  };

  const handleChange = (typeOptions, valueObj) => {
    formik.setFieldValue(typeOptions, valueObj.value);
    const { initialValues, values } = formik;
    if (valueObj.value !== initialValues[valueObj.value]) {
      const paramsSearch = { ...values, [typeOptions]: valueObj.value };
      handleSubmit(paramsSearch);
    }
  };
  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <Field
        type="text"
        name="title"
        placeholder="Search"
        value={formik.values.title.trim()}
        onChange={formik.handleChange}
      />
      {formik.values.title.trim() !== '' && (
        <BtnCancel
          type="button"
          onClick={() => {
            formik.setFieldValue('title', '');
            handleSubmit('title', '');
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
          value={defaultValue(CalegoriesOptions, formik.values.category)}
          onChange={(value) => handleChange('category', value)}
          options={CalegoriesOptions}
          placeholder="Categories"
          styles={SelectStyles}
        />

        <Select
          value={defaultValue(RecommendedOptions, formik.values.type)}
          onChange={(value) => handleChange('type', value)}
          options={RecommendedOptions}
          styles={SelectStyles}
        />
      </SelectWrapper>
      <FormTitle>Filters</FormTitle>
    </StyledForm>
  );
};
