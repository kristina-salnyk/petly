import React from 'react';
import {
  CardInfoWrapper,
  CardInfoList,
  CardInfoTitle,
  CardInfoField,
  CardInfoName,
  CardInfoValue,
} from './NoticeInfo.styled';


export const NoticeInfo = () => {
  return (
    <>
      <CardInfoWrapper>
        <CardInfoList>
          <CardInfoTitle>Cute dog looking for a home</CardInfoTitle>
          <CardInfoField>
            <CardInfoName>Breed:</CardInfoName>
            <CardInfoValue>Pomeranian</CardInfoValue>
          </CardInfoField>
          <CardInfoField>
            <CardInfoName>Place:</CardInfoName>
            <CardInfoValue>Lviv</CardInfoValue>
          </CardInfoField>
        </CardInfoList>
      </CardInfoWrapper>
    </>
  );
};
