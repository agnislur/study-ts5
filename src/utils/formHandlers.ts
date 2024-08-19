
import { saveUserData } from './storage';
import { resetForm } from './formUtils';
import { validateForm } from './formUtils';

export const handleSubmit = (
  event: React.FormEvent,
  username: string,
  email: string,
  nohp: string,
  password: string,
  setUsername: React.Dispatch<React.SetStateAction<string>>,
  setEmail: React.Dispatch<React.SetStateAction<string>>,
  setNohp: React.Dispatch<React.SetStateAction<string>>,
  setPassword: React.Dispatch<React.SetStateAction<string>>
) => {
  event.preventDefault();

  // Validasi form
  if (!validateForm(username, email, nohp, password)) {
    alert('Please fill out all fields.');
    return;
  }

  const userData = {
    username,
    email,
    nohp,
    password,
  };

  saveUserData(userData);

  // Reset form
  resetForm(setUsername, setEmail, setNohp, setPassword);

  alert('Registration successful!');
};
