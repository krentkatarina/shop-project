import React, { useState } from "react";
import { useSelector, useDispatch} from 'react-redux'
import UserSignUpForm from "./UserSignUpForm";
import UserLogInForm from "./UserLogInForm";


import styles from '../../styles/User.module.css'
import { toggleForm, toggleFormType } from "../../features/user/userSlice";

const UserForm = () => {
  const dispatch = useDispatch();
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const { showForm, formType } = useSelector(({ user }) => user);

  const closeForm = () => {
      if (hasUnsavedChanges) {
          const confirmClose = window.confirm("Are you sure you want to close the form? Your changes will be lost.");
          if (confirmClose) {
              setHasUnsavedChanges(false);
              dispatch(toggleForm(false));
          }
      } else {
          dispatch(toggleForm(false));
      }
  };

  const toggleCurrentFormType = (type) => dispatch(toggleFormType(type));


  return showForm ? (
      <>
          <div className={styles.overlay} onClick={closeForm} />
          {formType === "signup" ? (
              <UserSignUpForm
                  toggleCurrentFormType={toggleCurrentFormType}
                  closeForm={closeForm}
                  setHasUnsavedChanges={setHasUnsavedChanges}
              />
          ) : (
              <UserLogInForm
                  toggleCurrentFormType={toggleCurrentFormType}
                  closeForm={closeForm}
                  setHasUnsavedChanges={setHasUnsavedChanges} 
              />
          )}
      </>
  ) : (
      <></>
  );
};

export default UserForm;