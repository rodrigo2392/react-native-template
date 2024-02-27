import {useQuery} from '@tanstack/react-query';
import apiClient from '../api';

const getUsers = async () => {
  const res = await apiClient.get('users');
  return res.data;
};

export function useGerUsers() {
  return useQuery({queryKey: ['getUsers'], queryFn: getUsers});
}
