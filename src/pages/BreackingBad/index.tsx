import { useGetСharacters } from 'hooks';
import React from 'react';

export const BreackingBad = () => {
  const { data, isLoading } = useGetСharacters();
  console.log(data);
  return <div>BreackingBadList</div>;
};
