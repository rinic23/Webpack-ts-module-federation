import { Button, Spin } from 'antd';
import { useGetСharacters } from 'hooks';
import React, { useState } from 'react';
import { СharacterCard } from '../../components/BreackingBadComponents/СharacterCard';
import s from './index.module.scss';

export const BreackingBad = () => {
  const [currentOffset, setcurrentOffset] = useState(0);
  const { data, isLoading, isSuccess } = useGetСharacters({ currentOffset });

  const goNext = () => {
    setcurrentOffset(currentOffset + 12);
  };
  const goBack = () => {
    setcurrentOffset(currentOffset - 12);
  };

  return (
    <div className={s.breacking_bad_list}>
      {isLoading && <Spin size="large" className={s.spinner} />}
      {isSuccess && (
        <>
          <div className={s.cards_wrapper}>
            {data?.map((character) => (
              <СharacterCard {...character} key={character.char_id} />
            ))}
          </div>
          <div className={s.pagination_wrapper}>
            <Button onClick={goBack} disabled={!(currentOffset > 0)}>
              Предыдущая страница
            </Button>

            <Button onClick={goNext} disabled={!(data && data?.length === 12)}>
              Следующая страница
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
