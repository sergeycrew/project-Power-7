import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Field } from './ProductsFilters.styled';

import categories from '../../jsonFromBd/productsCategories.json';

const filterSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').required('Required'),
  category: Yup.string()
    .oneOf(['Dairy', 'Berries', 'Fish'])
    .required('Required'),
  type: Yup.string()
    .oneOf(['all', 'recommended', 'not recommended'])
    .required('Required'),
});

export const ProductFilters = () => (
  <div>
    <h1>Filters</h1>
    <Formik
      initialValues={{
        name: '',
        category: '',
        type: 'all',
      }}
      validationSchema={filterSchema}
      onSubmit={(values, actions) => {
        // onAdd(values);
        actions.resetForm();
      }}
    >
      <Form>
        <label>
          <Field name="name" placeholder="Search" />
        </label>
        <label>
          <Field as="select" name="category" placeholder="Categories">
            {categories.map((category) => (
              <option key={category._id.$oid} value={category.title}>
                {category.title}
              </option>
            ))}
          </Field>
        </label>
        <label>
          <Field as="select" name="type" placeholder="Search">
            <option value="all">All</option>
            <option value="recommended">Recommended</option>
            <option value="not recommended">Not recommended</option>
          </Field>
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);
