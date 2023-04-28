import UpdateUserForm from "../Components/UpdateUserForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUsers, deleteUser, updateUser, searchUser } from "../Store/Actions";
export default function Users() {
  const [showUpdateUserForm, setShowUpdateUserForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState({
    id: null,
    first_name: null,
    last_name: null,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const user = useSelector((state) => state.users);
  const [searchKeyword, setSearchKeyword] = useState('')
  return (
    <div>
        <pre>{searchKeyword}</pre>
        <input placeholder="search" value={searchKeyword} onChange={(e)=>{setSearchKeyword(e.target.value); dispatch(searchUser(e.target.value))  } } />
        <div>
      {showUpdateUserForm ? (
          <UpdateUserForm
          id={selectedUser.id}
          first_name={selectedUser.first_name}
          last_name={selectedUser.last_name}
          setShowUpdateUserForm={setShowUpdateUserForm}
        />
        ) : null}
        </div>
      {user.users.map((e) => {
        return (
          <div key={e.id} className="user-card">
            <div>
              <img src={e.avatar} alt="Avatar" />
            </div>
            <div className="name-container" >{e.first_name}</div>
            <div className="name-container">{e.last_name}</div>
            <button
              onClick={() => {
                dispatch(deleteUser(e.id));
              }}
              className="delete-btn"
            >
              Delete
            </button>
            <button
              onClick={() => {
                setShowUpdateUserForm(true);
                setSelectedUser(e);
              }}
              className="update-btn"
            >
              Update
            </button>
          </div>
        );
      })}
    </div>
  );
}
