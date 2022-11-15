export interface ILanguageMenu {
  addDriver: string;
  addCar: string;
  drivers: string;
  cars: string;
  lang: string;
  value: string;
};

export interface ILanguageDriver{
  name: string;
  registered: string;
  born: string;
  status: string;
  actions: string;
  statuses: {
    active: string;
    blocked: string;
    fired: string;
    not_active: string;
  };
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

export interface ILanguage {
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
  [index: string]: ILanguage;
}

export const languages: ILanguages = {
  ru: {
    menu: {
      addDriver: 'Добавить водителя',
      addCar: 'Добавить автомобиль',
      drivers: 'Водители',
      cars: 'Автомобили',
      lang: 'Русский',
      value: 'ru',
    },
    driver: {
      name: 'ФИО',
      registered: 'Дата регистрации',
      born: 'Дата рождения',
      status: 'Статус',
      actions: 'Действия',
      statuses: {
        active: "Активный",
        blocked: "Заблокирован",
        fired: "Уволенный",
        not_active: "Не активный",
      },
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
      value: 'ua',
    },
    driver: {
      name: 'ПІБ',
      registered: 'Дата реєстрації',
      born: 'Дата народження',
      status: 'Статус',
      actions: 'Дії',
      statuses: {
        active: "Активний",
        blocked: "Заблокований",
        fired: "Звільнений",
        not_active: "Не активний",
      },
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
      value: 'en',
    },
    driver: {
      name: 'Full name',
      registered: 'Registration Date',
      born: 'Date of birth',
      status: 'Status',
      actions: 'Actions',
      statuses: {
        active: "Active",
        blocked: "Blocked",
        fired: "Fired",
        not_active: "Not active",
      },
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
      value: 'de',
    },
    driver: {
      name: 'Voller Name',
      registered: 'Registrierungsdatum',
      born: 'Geburtsdatum',
      status: 'Status',
      actions: 'Aktionen',
      statuses: {
        active: "Aktiv",
        blocked: "Verstopft",
        fired: "Gefeuert",
        not_active: "Nicht aktiv",
      },
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