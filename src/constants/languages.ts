export interface ILanguageMenu {
  addDriver: string;
  addCar: string;
  drivers: string;
  cars: string;
  lang: string;
};

export interface ILanguageDriver{
  name: string;
  registered: string;
  born: string;
  status: string;
  actions: string;
};

export interface ILanguageCar{
  name: string;
  mark: string;
  model: string;
  number: string;
  year: string;
  status: string;
  actions: string;
};

export interface ILanguageActions{
  delete: string;
  look: string;
};

interface ILanguage {
  menu: ILanguageMenu;
  driver: ILanguageDriver;
  car: ILanguageCar;
  actions: ILanguageActions;
}

interface ILanguages{
  ru: ILanguage,
  en: ILanguage,
  ua: ILanguage,
  de: ILanguage,
}

export const languages: ILanguages = {
  ru: {
    menu: {
      addDriver: 'Добавить водителя',
      addCar: 'Добавить автомобиль',
      drivers: 'Водители',
      cars: 'Автомобили',
      lang: 'Русский',
    },
    driver: {
      name: 'ФИО',
      registered: 'Дата регистрации',
      born: 'Дата рождения',
      status: 'Статус',
      actions: 'Действия',
    },
    car: {
      name: 'ФИО водителя',
      mark: 'Марка автомобиля',
      model: 'Модель автомобиля',
      number: 'Номер автомобиля',
      year: 'Год выпуска',
      status: 'Статус',
      actions: 'Действия',
    },
    actions: {
      delete: 'Удалить',
      look: 'Посмотреть автомобили',
    },
  },
  ua: {
    menu: {
      addDriver: 'Додати водія',
      addCar: 'Додати автомобіль',
      drivers: 'Водії',
      cars: 'Автомобілі',
      lang: 'Українська',
    },
    driver: {
      name: 'ПІБ',
      registered: 'Дата реєстрації',
      born: 'Дата народження',
      status: 'Статус',
      actions: 'Дії',
    },
    car: {
      name: 'ПІБ водія',
      mark: 'Марка автомобіля',
      model: 'Модель автомобіля',
      number: 'Номер автомобіля',
      year: 'Рік випуску',
      status: 'Статус',
      actions: 'Дії',
    },
    actions: {
      delete: 'Видалити',
      look: 'Переглянути автомобілі',
    },
  },
  en: {
    menu: {
      addDriver: 'Add a driver',
      addCar: 'Add a car',
      drivers: 'Drivers',
      cars: 'Cars',
      lang: 'English',
    },
    driver: {
      name: 'Full name',
      registered: 'Registration Date',
      born: 'Date of birth',
      status: 'Status',
      actions: 'Actions',
    },
    car: {
      name: 'Driver\'s name',
      mark: 'Car brand',
      model: 'Car model',
      number: 'Vehicle number',
      year: 'Graduation year',
      status: 'Status',
      actions: 'Actions',
    },
    actions: {
      delete: 'Remove',
      look: 'View cars',
    },
  },
  de: {
    menu: {
      addDriver: 'Treiber hinzufügen',
      addCar: 'Auto hinzufügen',
      drivers: 'Treiber',
      cars: 'Autos',
      lang: 'Deutsch',
    },
    driver: {
      name: 'Voller Name',
      registered: 'Registrierungsdatum',
      born: 'Geburtsdatum',
      status: 'Status',
      actions: 'Aktionen',
    },
    car: {
      name: 'Fahrername',
      mark: 'Automarke',
      model: 'Auto Model',
      number: 'Fahrzeugnummer',
      year: 'Abschlussjahr',
      status: 'Status',
      actions: 'Aktionen',
    },
    actions: {
      delete: 'Entfernen',
      look: 'Autos ansehen',
    },
  },
};