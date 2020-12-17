import cookiesData from "../cookies";
import slugify from "react-slugify";

const initialState = {
  cookies: cookiesData,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_COOKIE":
      const { newCookie } = action.payload;
      newCookie.id = state.cookies[state.cookies.length - 1].id + 1;
      newCookie.slug = slugify(newCookie.name);
      return {
        ...state,
        cookies: [...state.cookies, newCookie],
      };

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
