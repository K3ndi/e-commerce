import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import useOutsideClose from '../../hooks/useOutsideClose';
import useScrollDisable from '../../hooks/useScrollDisable';
import { useAppSelector } from '../../store/hooks';
import { selectIsFormOpen, toggleForm } from '../../store/shared/shared.slice';
import { useDispatch } from 'react-redux';

const AccountForm: React.FC = () => {
  const { inputValues, handleInputValues, handleFormSubmit } = useForm();

  const isFormOpen = useAppSelector(selectIsFormOpen);
  const dispatch = useDispatch();

  const onToggleForm = (value: boolean) => (): void => {
    dispatch(toggleForm(value));
  };

  const formRef = useRef(null);

  useOutsideClose(formRef, () => {
    dispatch(toggleForm(false));
  });

  useScrollDisable(isFormOpen);

  const [isSignupVisible, setIsSignupVisible] = useState(false);

  // Signup-form visibility toggling
  const handleIsSignupVisible = (): void => {
    setIsSignupVisible((prevState) => !prevState);
  };

  return (
    <>
      {isFormOpen && (
        <div className="backdrop">
          <div className="modal_centered">
            <form id="account_form" ref={formRef} onSubmit={handleFormSubmit}>
              {/*===== Form-Header =====*/}
              <div className="form_head">
                <h2>{isSignupVisible ? 'Signup' : 'Login'}</h2>
                <p>
                  {isSignupVisible
                    ? 'Already have an account ?'
                    : 'New to Tech Zone ?'}
                  &nbsp;&nbsp;
                  <button type="button" onClick={handleIsSignupVisible}>
                    {isSignupVisible ? 'Login' : 'Create an account'}
                  </button>
                </p>
              </div>

              {/*===== Form-Body =====*/}
              <div className="form_body">
                {isSignupVisible && (
                  <div className="input_box">
                    <input
                      type="text"
                      name="username"
                      className="input_field"
                      value={inputValues.username || ''}
                      onChange={handleInputValues}
                      required
                    />
                    <label className="input_label">Username</label>
                  </div>
                )}

                <div className="input_box">
                  <input
                    type="email"
                    name="mail"
                    className="input_field"
                    value={inputValues.mail || ''}
                    onChange={handleInputValues}
                    required
                  />
                  <label className="input_label">Email</label>
                </div>

                <div className="input_box">
                  <input
                    type="password"
                    name="password"
                    className="input_field"
                    value={inputValues.password || ''}
                    onChange={handleInputValues}
                    required
                  />
                  <label className="input_label">Password</label>
                </div>

                {isSignupVisible && (
                  <div className="input_box">
                    <input
                      type="password"
                      name="conf_password"
                      className="input_field"
                      value={inputValues.conf_password || ''}
                      onChange={handleInputValues}
                      required
                    />
                    <label className="input_label">Confirm Password</label>
                  </div>
                )}

                <button type="submit" className="btn login_btn">
                  {isSignupVisible ? 'Signup' : 'Login'}
                </button>
              </div>

              {/*===== Form-Footer =====*/}
              <div className="form_foot">
                <p>or login with</p>
                <div className="login_options">
                  <Link to="/">Facebook</Link>
                  <Link to="/">Google</Link>
                  <Link to="/">Twitter</Link>
                </div>
              </div>

              {/*===== Form-Close-Btn =====*/}
              <div
                className="close_btn"
                title="Close"
                onClick={onToggleForm(false)}
              >
                &times;
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AccountForm;
