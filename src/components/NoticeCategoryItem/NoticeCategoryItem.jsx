import React from 'react';

import { NoticeImage } from './NoticeImage/NoticeImage';
import { NoticeButtons } from './NoticeButtons/NoticeButtons';
import { NoticeCard } from './NoticeCategoryItem.styled';
import { NoticeInfo } from './NoticeInfo/NoticeInfo';

export const NoticeCategoryItem = () => {
  
  return (
    <NoticeCard>
      <NoticeImage />
      <NoticeInfo />
      <NoticeButtons />
    </NoticeCard>
  );
};
// li item
