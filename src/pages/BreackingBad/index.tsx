import { Spin } from 'antd';
import { useGetСharacters } from 'hooks';
import React from 'react';
import s from './index.module.scss';
import { СharacterCard } from './СharacterCard';

export const BreackingBad = () => {
  const { data, isLoading, isSuccess } = useGetСharacters();
  return (
    <div className={s.breacking_bad_list}>
      {isLoading && <Spin size="large" />}
      <div className={s.cards_wrapper}>
        {isSuccess &&
          data?.map((character) => <СharacterCard {...character} key={character.char_id} />)}
      </div>
    </div>
  );
};
