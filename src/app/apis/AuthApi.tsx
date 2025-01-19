import axios from 'axios';

export const loginUser = async (email: string, password: string) => {
  const validEmail = 'r@gmail.com'; // Correo válido
  const validPassword = '1234'; // Contraseña válida

  const endpoint =
    email === validEmail && password === validPassword
      ? 'https://run.mocky.io/v3/ef6bc6c9-304c-468f-a043-7ef4c2312b26' // Endpoint de éxito
      : 'https://run.mocky.io/v3/32972e03-bbd7-418b-8955-a1ee54e66f0c'; // Endpoint de fallo

  try {
    const response = await axios.post(endpoint, { email, password });
    return response;
  } catch (error) {
    throw new Error('Invalid email or password.');
  }
};