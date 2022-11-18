import {useQuery} from 'react-query';
import {getUserAndRepos, searchUser} from '../lib/api';

export const useUsers = (search: string) => {
  return useQuery({
    queryKey: `users-${search}`,
    queryFn: () => searchUser(search),
    enabled: false,
  });
};

export const useUserAndRepos = (login: string) => {
  return useQuery({
    queryKey: login,
    queryFn: () => getUserAndRepos(login),
    // enabled: false,
  });
};
