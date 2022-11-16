import { ChangeEvent, ReactElement } from "react";
import { useDispatch } from "react-redux";
import { languages } from "../../constants/languages";
import { defaultLanguageState } from "../../redux/reducers/languagesReducer";
import classes from './LanguagesChanger.module.scss';

export const LanguagesChanger = (): ReactElement => {
  const actualLanguage = defaultLanguageState.language;
  const dispatch = useDispatch();
  
  const changeLanguage = (e: ChangeEvent<HTMLSelectElement>): void => {
    dispatch({ type: e.target.value });
  };
  
  return (
    <div>
      <select
        defaultValue={actualLanguage.menu.value}
        name='lang' className={classes.select}
        onChange={changeLanguage}
      >
        {Object.keys(languages).map((key, i) =>
          <option
            value={languages[key].menu.value}
            key={i}
          >
            {languages[key].menu.lang}
          </option>)}
      </select>
    </div>
  );
};