import { useQuery } from 'react-query';
import { BreackingBadService } from 'services';

export const useGetСharacters = () => {
  const { isLoading, data } = useQuery('getBreackingBadСharacters', () =>
    BreackingBadService.getСharacters(),
  );
  return { isLoading, data: data?.data };
};
