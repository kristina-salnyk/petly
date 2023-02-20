import React from 'react';
import { NoticeImage } from './NoticeImage/NoticeImage';
import { NoticeInfo } from './NoticeInfo/NoticeInfo';
import { NoticeButtons } from './NoticeButtons/NoticeButtons';
import { NoticeCard } from './NoticeCategoryItem.styled';

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
