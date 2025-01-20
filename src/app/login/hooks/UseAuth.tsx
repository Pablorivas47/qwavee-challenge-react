import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser } from '@/app/apis/AuthApi';

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const router = useRouter();

  const handleLogin = async (email: string, password: string) => {
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await loginUser(email, password);

      if (response.status === 200 && response.data.éxito) {
        router.push('/home');
      } else {
        setErrorMessage('Something went wrong. Please try again.');
      }
    } catch {
      setErrorMessage('Invalid email or password.');
    } finally {
      setLoading(false);
    }
  };

  return { handleLogin, loading, errorMessage, successMessage };
};
