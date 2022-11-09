import { languages } from "../../constants/languages";
import classes from './LanguagesChanger.module.scss';

export const LanguagesChanger = () => {
  return (
    <div>
      <select name='lang' className={classes.select}>
        <option value='en'>{ languages.en.menu.lang}</option>
        <option value='de'>{ languages.de.menu.lang}</option>
        <option value='ru'>{ languages.ru.menu.lang}</option>
        <option value='ua'>{ languages.ua.menu.lang}</option>
      </select>
    </div>
  )
}