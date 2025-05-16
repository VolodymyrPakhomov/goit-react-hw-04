import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./SearchBar.module.css";

export default function Searchbar({ onSearch }) {
  return (
    <header className={css.searchbar}>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, actions) => {
          onSearch(values.query);
          actions.resetForm(); //reset
        }}
      >
        <Form className={css.form}>
          <Field type="text" name="query" className={css.input} />
          <button type="submit" className={css.button}>
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
}
