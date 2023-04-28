import { useDispatch } from "react-redux";
import { useState } from "react";
import { updateUser } from "../Store/Actions";
export default function UpdateUser(
  {id,
  first_name,
  last_name,
  setShowUpdateUserForm}
) {
    console.log(id, first_name, last_name);
  const [firstName, setFirstName] = useState(first_name);
  const [lastName, setLastName] = useState(last_name);
  const dispatch = useDispatch();
  return (
    <div>
      <form>
        <h2>
        Update User
        </h2>
        <div>
        <label>First Name</label>
        <input
          value={firstName}
          onChange={(e) => {
              setFirstName(e.target.value);
          }}
          />
          <label>Last Name</label>
        <input
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
        }}
        />
        </div>
        <div>
        <button
          onClick={() => {
            setShowUpdateUserForm(false);
          }}
          className="cancel-btn"
        >
          Cancel
        </button>
        <button
        className="update-btn"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setShowUpdateUserForm(false);
            dispatch(updateUser(id, firstName, lastName));
        }}
        >
          Update
        </button>
        </div>
      </form>
    </div>
  );
}
