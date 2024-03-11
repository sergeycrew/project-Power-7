const selectBgrColor = '#1c1c1c';
const whiteColor = '#efede8';
const scrollColor = 'rgba(239, 237, 232, 0.1)';

export const SelectStyles = {
  // опции
  option: (baseStyles) => {
    return {
      ...baseStyles,
      background: selectBgrColor,
      color: whiteColor,
      textwrap: 'nowrap',
    };
  },

  // поле input
  control: (baseStyles) => {
    return {
      ...baseStyles,
      backgroundColor: 'transparent',
      borderRadius: '12px',
      width: '100%',
      height: '46px',
      border: '1px solid rgba(239, 237, 232, 0.2)',
      boxShadow: 'none',
      '&:hover': {
        borderColor: '#E6533C',
      },
      '&:focus': {
        borderColor: '#E6533C',
      },
      '@media (min-width: 768px)': {
        height: '50px',
        // width: '192px',
      },
    };
  },

  //стрелка вниз
  dropdownIndicator: (baseStyles) => ({
    ...baseStyles,
    display: 'none',

    '@media (min-width: 768px)': {
      display: 'flex',
      justifyContent: 'flex-end',
      color: whiteColor,
    },
  }),

  //выпадающее меню
  menu: (baseStyles) => {
    return {
      ...baseStyles,

      background: selectBgrColor,
      borderRadius: '12px',
    };
  },

  //список выпадающего меню (длина выпадайки)
  menuList: (baseStyles) => {
    return {
      ...baseStyles,
      //общее
      '::-webkit-scrollbar': {
        width: '22px',
      },
      //дорожка
      '::-webkit-scrollbar-track': {
        background: 'transparent',
      },
      //бегунок
      '::-webkit-scrollbar-thumb': {
        background: scrollColor,
        borderRadius: '12px',
        border: '7px solid',
        borderColor: selectBgrColor,
      },
      maxHeight: '276px',
      borderRadius: '12px',
      overflowX: 'hidden',
    };
  },

  //разделитель в инпуте поля ввода и кнопки стрелка вниз
  indicatorSeparator: (baseStyles) => {
    return {
      ...baseStyles,
      display: 'none',
    };
  },

  placeholder: (baseStyles) => ({
    ...baseStyles,
    color: whiteColor,
  }),

  singleValue: (baseStyles) => {
    return {
      ...baseStyles,
      color: whiteColor,
    };
  },

  //тоже поле input
  container: (baseStyles) => {
    return {
      ...baseStyles,
      display: 'flex',
      alignItems: 'center',
      border: '1px',
      height: '46px',
      width: '100%',
      '&:hover': {
        borderColor: '#E6533C',
      },
      '&:focus': {
        borderColor: '#E6533C',
      },
      '@media (min-width: 768px)': {
        height: '50px',
      },
    };
  },

  //тоже поле input
  input: (baseStyles) => {
    return {
      ...baseStyles,
      fontSize: '14px',
    };
  },
};
