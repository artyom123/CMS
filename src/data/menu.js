const MENU = [
  {
    id: 1,
    title: 'Главная',
    icon: 'home',
    isAll: true,
    link: '/',
  },
  {
    id: 2,
    title: 'Статистика',
    icon: 'chart-bar',
    link: '/statistics',
  },
  {
    id: 3,
    title: 'Время',
    icon: 'clock',
    isAll: true,
    link: '/time',
  },
  {
    id: 4,
    title: 'Сотрудники',
    icon: 'user-tie',
    link: '/employees',
  },
  {
    id: 5,
    title: 'Расписание',
    icon: 'calendar-alt',
    isAll: true,
    link: '/schedule',
  },
  {
    id: 6,
    title: 'ЗП',
    icon: 'dollar-sign',
    link: '/salary',
  },
  {
    id: 7,
    title: 'Клиенты',
    icon: 'users',
    isAll: true,
    link: '/clients',
  },
];

const MENU_USER = [
  {
    id: 1,
    link: '/setting-user',
    title: "Настройки",
  },
  {
    id: 2,
    link: '/login',
    title: "Выход",  
  },
];

export {
  MENU,
  MENU_USER,
};
