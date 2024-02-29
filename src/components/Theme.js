export const theme = {
  colors: {
    mainBgColor: '#ffffff',
    mainFormColor: '#e5f2f7',
    //#f0e9f0',
    mainTextColor: '#2b8ac8',
    accentTextColor: '#2474a8',
    errorTextColor: '#900C3F',
    bottomColor: '#e5d2ea',
    bottomAccentColor: '#bdbbe5',
    borderColor: '#bdbbe5',
    errorColor: 'red',
  },

  radii: {
    sd: '4px',
    ld: '8px',
  },

  spasing: (value) => `${value * 4}px`,

  shadows: {
    formShadow: `0px 5px 10px 2px rgba(34, 60, 80, 0.2)`,
    btnShadow: `5px 5px 5px -5px rgba(255, 255, 255, 0.8) inset`,
    btnPushShadow: `3px 3px 3px -3px rgba(34, 60, 80, 0.6) inset`,
  },
};
