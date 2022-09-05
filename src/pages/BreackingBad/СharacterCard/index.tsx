import React from 'react';
import { BreackingBadService } from 'services';
import { characterStatusRu } from './constants';
import s from './index.module.scss';

export const СharacterCard = ({
  img,
  name,
  nickname,
  birthday,
  status,
}: BreackingBadService.TBreackingBadСharacter) => (
  <div className={s.card_wrapper}>
    <img src={img} alt={name} />
    <div className={s.card_info}>
      <span>{`Имя: ${nickname}`}</span>
      <span>{`Дата рождения: ${birthday === 'Unknown' ? 'Не известна' : birthday}`}</span>
      <span>{`Статус: ${characterStatusRu[status]}`}</span>
    </div>
  </div>
);
