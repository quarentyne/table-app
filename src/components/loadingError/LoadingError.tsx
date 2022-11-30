import { useTypedSelector } from '../../hooks/useTypedSelector';
import classes from './LoadingError.module.scss';

export const LoadingError = () => {
  const errorLang = useTypedSelector(state => state.language.language.error.loadingError)

  return (
    <div className={classes.loading_error}>
      {errorLang}
    </div>
  );
};