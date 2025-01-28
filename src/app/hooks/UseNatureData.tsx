import fetchNatureData from '@/app/api/NatureApi';
import { useState, useEffect } from 'react';


interface NatureData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export const useNatureData = () => {
  const [natureData, setNatureData] = useState<NatureData[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchNatureData();
      setNatureData(data);
    };
    loadData();
  }, []);

  return natureData;
};
