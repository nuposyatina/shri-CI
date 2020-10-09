const initialState = {
  currentLanguage: 'en',
  en: null,
  ru: null
};

const locales = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LOCALES_SUCCESS':
      return {
        ...state,
        [action.payload.language]: {
          ...state[action.payload.language],
          ...action.payload.locales
        },
        currentLanguage: action.payload.language
      };
    case 'CHANGE_CURRENT_LANGUAGE':
      return {
        ...state,
        currentLanguage: action.payload.language
      };
    default:
      return state;
  }
};

export default locales;