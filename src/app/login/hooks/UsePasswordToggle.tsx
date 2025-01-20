import { useState, useEffect } from 'react';

export const usePasswordToggle = () => {
  const [showPassword, setShowPassword] = useState<boolean | null>(null);

  useEffect(() => {
    setShowPassword(false);
  }, []);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return { showPassword, togglePasswordVisibility };
};
