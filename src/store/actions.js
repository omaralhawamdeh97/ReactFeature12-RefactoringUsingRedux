// ACTION TYPES
const CREATE_COOKIE = "CREATE_COOKIE";
const DELETE_COOKIE = "DELETE_COOKIE";
const UPDATE_COOKIE = "UPDATE_COOKIE";

export const createCookie = (newCookie) => {
  return {
    type: CREATE_COOKIE,
    payload: { newCookie },
  };
};

export const deleteCookie = (cookieId) => {
  return {
    type: DELETE_COOKIE,
    payload: { cookieId },
  };
};

export const updateCookie = (updatedCookie) => {
  console.log(
    "🚀 ~ file: actions.js ~ line 25 ~ updateCookie ~ updatedCookie",
    updatedCookie
  );
  return {
    type: CREATE_COOKIE,
    payload: { updatedCookie },
  };
};
