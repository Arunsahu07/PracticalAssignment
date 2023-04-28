import {
  delete_User,
  get_Users,
  update_User,
  getUsers_Success,
  getUsers_Fail,
  search_user
} from "./ActionTypes";
export const getUsers = () => {
  const URL = "https://reqres.in/api/users";
  return async(dispatch) => {
    dispatch({ type: get_Users });
    return fetch(URL).then((res) =>
      res
        .json()
        .then((data) => {
          return dispatch({
            type: getUsers_Success,
            payload: { users: data.data },
          });
        })
        .catch((e) => {
          return dispatch({
            type: getUsers_Fail,
            payload: { message: "Could not fetch users data" },
          });
        })
    );
  };
};

export const updateUser = (id, first_name, last_name) => {
  return { type: update_User, payload: { first_name, last_name, id } };
};

export const deleteUser = (id) => {
  return { type: delete_User, payload: { id } };
};

export const searchUser = (keyword)=>{
    return {type : search_user, payload: {keyword}}
}
