import css from './ErrorMessage.module.css';

export default function ErrorMessage({ message }) {
  return (
    <div className={css.error}>
      <p>Oops ERROR HELP!</p>
    </div>
  );
}
