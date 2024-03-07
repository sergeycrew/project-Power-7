import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  StyledForm,
  Field,
  FindBtn,
  FormTitle,
  SvgMagnifier,
  ErrorMessage,
} from './ProductsFilters.styled';

import { fetchProducts } from '../../redux/products/productOperations';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/products/productFilterSlice';
import categories from '../../jsonFromBd/productsCategories.json';
import sprite from '../../images/sprite.svg';

// useEffect(() => {
//   dispatch(fetchProducts());
// }, [dispatch]);

const filterSchema = Yup.object().shape({
  title: Yup.string().min(3, 'Too Short!'),
  category: Yup.string().strict(true).oneOf(['dairy', 'berries', 'fish']),
  type: Yup.string()
    .strict(true)
    .oneOf(['all', 'recommended', 'not recommended']),
});

export const ProductFilters = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <FormTitle>Filters</FormTitle>
      <Formik
        initialValues={{
          title: '',
          category: '',
          type: '',
        }}
        validationSchema={filterSchema}
        onSubmit={(values, actions) => {
          dispatch(changeFilter(values));
          dispatch(fetchProducts());
          // actions.resetForm();
        }}
      >
        <StyledForm>
          <label>
            <Field name="title" placeholder="Search" />
            <ErrorMessage name="title" component="span" />
          </label>
          <label>
            <Field as="select" name="category">
              {categories.map((category) => (
                <option
                  key={category._id.$oid}
                  id={category._id.$oid}
                  name="category"
                  value={category.title}
                >
                  {category.title}
                </option>
              ))}
            </Field>
            <ErrorMessage name="category" component="span" />
          </label>
          <label>
            <Field as="select" name="type">
              <option
                value="all"
                // onChange={(value) => setFieldValue('type', value)}
              >
                All
              </option>
              <option
                value="recommended"
                // onChange={(value) => setFieldValue('type', value)}
              >
                Recommended
              </option>
              <option
                value="not recommended"
                // onChange={(value) => setFieldValue('type', value)}
              >
                Not recommended
              </option>
            </Field>
            <ErrorMessage name="type" component="span" />
          </label>
          <FindBtn type="submit">
            <SvgMagnifier>
              <use href={`${sprite}#icon-search`}></use>
            </SvgMagnifier>
          </FindBtn>
        </StyledForm>
      </Formik>
    </div>
  );
};
