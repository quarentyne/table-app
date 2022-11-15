import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { languages } from "../../constants/languages";
import { defaultLanguageState } from "../../redux/reducers/languagesReducer";
import classes from './LanguagesChanger.module.scss';

export const LanguagesChanger = () => {
  const actualLanguage = defaultLanguageState.language;
  const dispatch = useDispatch();
  
  const changeLanguage = (e: ChangeEvent<HTMLSelectElement>): void => {
    dispatch({ type: e.target.value });
  };
  
  return (
    <div>
      <select name='lang' className={classes.select} onChange={changeLanguage}>
        {Object.keys(languages).map((key, i) =>
          <option
            value={languages[key].menu.value}
            key={i}
            selected={languages[key].menu.value === actualLanguage.menu.value}>
            {languages[key].menu.lang}
          </option>)}
      </select>
    </div>
  );
};