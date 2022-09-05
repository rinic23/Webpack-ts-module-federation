import { useQuery } from 'react-query';
import { BreackingBadService } from 'services';

export const useGetСharacters = () => {
  const { data, ...otherData } = useQuery('getBreackingBadСharacters', () =>
    BreackingBadService.BreackingBadEndPoints.getСharacters(),
  );
  return { ...otherData, data: data?.data };
};
