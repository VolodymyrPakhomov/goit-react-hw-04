import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';

export default function Searchbar({ onSearch }) {
  return (
    <header className={css.searchbar}>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={(values, actions) => {
          if (values.query.trim() === '') {
            toast.error('Please enter a search query!');
            return;
          }

          onSearch(values.query);
          actions.resetForm();
        }}
      >
        <Form className={css.form}>
          <Field
            placeholder="Search images and photos"
            type="text"
            name="query"
            className={css.input}
          />
          <button type="submit" className={css.button}>
            Search
          </button>
        </Form>
      </Formik>

      <Toaster position="top-right" reverseOrder={false} />
    </header>
  );
}
