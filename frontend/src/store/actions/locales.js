export const getLocales = (language) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/locales?lang=${language}`).
    then((response) => {
      return response.json()
    }).
    then((result) => {
      dispatch(getLocalesSuccess(language, result))
    }).
    catch((err) => {
      console.log(err)
    })
  }
};

const getLocalesSuccess = (language, locales) => ({
  type: 'GET_LOCALES_SUCCESS',
  payload: {
    language,
    locales
  }
});

export const changeCurrentLanguage = (language) => ({
  type: 'GET_LOCALES_SUCCESS',
  payload: {
    language
  }
});