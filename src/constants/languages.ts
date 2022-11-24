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
    [index: string]: string;
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
  statuses: {
    econom: string;
    standart: string;
    bussiness: string;
    eco: string;
    [index: string]: string;
  };
};

export interface IAddDriver{
  firstName: string;
  lastName: string;
  birth: string;
  status: string;
};

export interface IAddCar{
  owner: string;
  mark: string;
  model: string;
  number: string;
  year: string;
  status: string;
};

export interface ILanguageActions{
  delete: string;
  autos: string;
  drivers: string;
};

export interface ILanguage {
  menu: ILanguageMenu;
  driver: ILanguageDriver;
  addDriver: IAddDriver;
  addCar: IAddCar;
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
    addDriver: {
      firstName: 'Введите имя',
      lastName: 'Введите фамилию',
      birth: 'Введите дату рождения в формате дд.мм.гггг',
      status: 'Выберите статус',
    },
    car: {
      name: 'ФИО водителя',
      mark: 'Марка автомобиля',
      model: 'Модель автомобиля',
      number: 'Номер автомобиля',
      year: 'Год выпуска',
      status: 'Класс',
      actions: 'Действия',
      statuses: {
        eco: 'Эко',
        econom: 'Эконом',
        bussiness: 'Бизнесс',
        standart: 'Стандарт',
      },
    },
    addCar: {
      owner: 'Владелец',
      mark: 'Марка',
      model: 'Модель',
      year: 'Год выпуска',
      number: 'Номер',
      status: 'Класс',
    },
    actions: {
      delete: 'Удалить',
      autos: 'Посмотреть автомобили',
      drivers: 'Посмотреть владельца',
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
    addDriver: {
      firstName: 'Введіть ім\'я',
      lastName: 'Введіть прізвище',
      birth: 'Введіть дату народження у форматі дд.мм.гггг',
      status: 'Виберіть статус',
    },
    car: {
      name: 'ПІБ водія',
      mark: 'Марка автомобіля',
      model: 'Модель автомобіля',
      number: 'Номер автомобіля',
      year: 'Рік випуску',
      status: 'Клас',
      actions: 'Дії',
      statuses: {
        eco: 'Еко',
        econom: 'Економ',
        bussiness: 'Бізнес',
        standart: 'Стандарт',
      },
    },
    addCar: {
      owner: 'Власник',
      mark: 'Марка',
      model: 'Модель',
      year: 'Рік випуску',
      number: 'Номер',
      status: 'Клас',
    },
    actions: {
      delete: 'Видалити',
      autos: 'Переглянути автомобілі',
      drivers: 'Переглянути власника',
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
    addDriver: {
      firstName: 'Enter a name',
      lastName: 'Enter last name',
      birth: 'Enter your date of birth in the format dd.mm.yyyy',
      status: 'Select status',
    },
    car: {
      name: 'Driver\'s name',
      mark: 'Car brand',
      model: 'Car model',
      number: 'Vehicle number',
      year: 'Graduation year',
      status: 'Class',
      actions: 'Actions',
      statuses: {
        eco: 'Eco',
        econom: 'Econom',
        bussiness: 'Bussiness',
        standart: 'Standard',
      },
    },
    addCar: {
      owner: 'Owner',
      mark: 'Mark',
      model: 'Model',
      year: 'Release year',
      number: 'Number',
      status: 'Class',
    },
    actions: {
      delete: 'Remove',
      autos: 'View cars',
      drivers: 'View owner',
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
    addDriver: {
      firstName: 'Gib deinen Namen ein',
      lastName: 'Nachnamen eingeben',
      birth: 'Geben Sie Ihr Geburtsdatum im Format TT.MM.JJJJ ein',
      status: 'Status auswählen',
    },
    car: {
      name: 'Fahrername',
      mark: 'Automarke',
      model: 'Auto Model',
      number: 'Fahrzeugnummer',
      year: 'Abschlussjahr',
      status: 'Klasse',
      actions: 'Aktionen',
      statuses: {
        eco: 'Öko',
        econom: 'Wirtschaft',
        bussiness: 'Geschäft',
        standart: 'Standard',
      },
    },
    addCar: {
      owner: 'Eigentümer',
      mark: 'Marke',
      model: 'Modell',
      year: 'Baujahr',
      number: 'Nummer',
      status: 'Klasse',
    },
    actions: {
      delete: 'Entfernen',
      autos: 'Autos ansehen',
      drivers: 'Besitzer anzeigen',
    },
  },
};