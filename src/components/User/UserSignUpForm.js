import React, { useState } from "react";
import styles from '../../styles/User.module.css'
import { createUser } from "../../features/user/userSlice";
import { useDispatch} from 'react-redux'



const UserSignUpForm = ({ toggleCurrentFormType, closeForm, setHasUnsavedChanges }) => { // Принимаем setHasUnsavedChanges через пропс
  const dispatch = useDispatch();
  const [values, setValues] = useState({
      name: "",
      email: "",
      password: "",
      avatar: "",
  });

  const handleChange = ({ target: { value, name } }) => {
      setValues({ ...values, [name]: value });
      setHasUnsavedChanges(!Object.values({ ...values, [name]: value }).every((val) => val)); // Используем setHasUnsavedChanges
  };

  const handleSubmit = (e) => {
      e.preventDefault();

      const isNotEmpty = Object.values(values).every((val) => val);

      if (!isNotEmpty) {
          setHasUnsavedChanges(true);
          return;
      }

      dispatch(createUser(values));
      closeForm();
  };
    return (
      <div className={styles.wrapper} data-testid='auth popup'>
        <div className={styles.close} onClick={closeForm}>
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`} />
          </svg>
        </div>
  
        <div className={styles.title}>Sign Up</div>
  
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.group}>
            <input
              type="email"
              placeholder="Your email"
              name="email"
              value={values.email}
              autoComplete="off"
              onChange={handleChange}
              required
            />
          </div>
  
          <div className={styles.group}>
            <input
              type="name"
              placeholder="Your name"
              name="name"
              value={values.name}
              autoComplete="off"
              onChange={handleChange}
              required
            />
          </div>
  
          <div className={styles.group}>
            <input
              type="password"
              placeholder="Your password"
              name="password"
              value={values.password}
              autoComplete="off"
              onChange={handleChange}
              required
            />
          </div>
  
          <div className={styles.group}>
            <input
              type="avatar"
              placeholder="Your avatar"
              name="avatar"
              value={values.avatar}
              autoComplete="off"
              onChange={handleChange}
              required
            />
          </div>
  
          <div
            className={styles.link}
            onClick={() => toggleCurrentFormType("login")}
          >
            I already have an account
          </div>
  
          <button type="submit" className={styles.submit}>
            Create an account
          </button>
        </form>
      </div>
    );
  };

export default UserSignUpForm;