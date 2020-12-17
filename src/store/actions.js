// ACTION TYPES
const DELETE_COOKIE = "DELETE_COOKIE";

export const deleteCookie = (cookieId) => {
  return {
    type: DELETE_COOKIE,
    payload: { cookieId },
  };
};
