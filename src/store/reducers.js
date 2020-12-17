import cookiesData from "../cookies";

const initialState = {
  cookies: cookiesData,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_COOKIE":
      return {
        ...state,
        cookies: state.cookies.filter(
          (cookie) => cookie.id !== action.payload.cookieId
        ),
      };
    default:
      return state;
  }
};

export default reducer;
