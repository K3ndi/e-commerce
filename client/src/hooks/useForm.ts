import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFormUserInfo, toggleForm } from '../store/shared/shared.slice';

interface InputValuesState {
  username: string;
  mail: string;
  password: string;
  conf_password: string;
}

interface useFormReturnTypes {
  inputValues: InputValuesState;
  handleInputValues: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const useForm = (): useFormReturnTypes => {
  const [inputValues, setInputValues] = useState<InputValuesState>({
    username: '',
    mail: '',
    password: '',
    conf_password: '',
  });

  const dispatch = useDispatch();
  // handling input-values
  const handleInputValues = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setInputValues((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  };

  // handling form-submission
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    const loggedUserInfo = inputValues.mail.split('@')[0].toUpperCase();

    e.preventDefault();

    setInputValues({
      username: '',
      mail: '',
      password: '',
      conf_password: '',
    });

    dispatch(setFormUserInfo(loggedUserInfo));

    dispatch(toggleForm(false));

    alert(`Hello ${loggedUserInfo}, you're successfully logged-in.`);
  };

  return { inputValues, handleInputValues, handleFormSubmit };
};

export default useForm;
