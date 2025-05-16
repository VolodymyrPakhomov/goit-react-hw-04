import { FadeLoader } from 'react-spinners';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.loader}>
      <FadeLoader height={15} color="#2634fd8f" />
    </div>
  );
}