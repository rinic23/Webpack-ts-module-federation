import { notification } from 'antd';
import { useQuery } from 'react-query';
import { BreackingBadService } from 'services';

type TProps = {
  currentOffset: number;
};

export const useGetСharacters = ({ currentOffset }: TProps) => {
  const { data, ...otherData } = useQuery(
    ['getBreackingBadСharacters', currentOffset],
    () => BreackingBadService.BreackingBadEndPoints.getСharacters(currentOffset),
    {
      onError: () => {
        notification.error({ message: 'Произошла ошибка при загрузке данных' });
      },
    },
  );
  return { ...otherData, data: data?.data };
};
