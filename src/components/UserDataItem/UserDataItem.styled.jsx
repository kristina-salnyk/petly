import styled from 'styled-components';

export const InfoList = styled.ul`
  margin-top: 50px;
  padding-left: 16px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-top: 0;
    margin-bottom: 35px;
    margin-right: 40px;
    padding-left: 32px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 15px;
  }
`;

export const InfoItem = styled.li`
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-bottom: 15px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 15px;
  }
`;

export const InfoLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  color: #111111;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: 18px;
    line-height: 25px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 18px;
    line-height: 25px;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space between;
  align-items: center;
`;

export const InfoInput = styled.input`
  width: 159px;
  height: 24px;

  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  box-sizing: border-box;
  padding-left: 18px;
  background: #fff;
  border: 1px solid black;
  // border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;

  &:focus {
    background: #fdf7f2;
    border: 1px solid rgba(245, 146, 86, 0.5);
    outline: none;
  }

  @media screen and (min-width: 330px) and (max-width: 364px) {
    min-width: 180px;
  }

  @media screen and (min-width: 365px) and (max-width: 390px) {
    min-width: 220px;
  }

  @media screen and (min-width: 365px) and (max-width: 389px) {
    min-width: 220px;
  }

  @media screen and (min-width: 390px) and (max-width: 429px) {
    min-width: 240px;
  }

  @media screen and (min-width: 430px) and (max-width: 460px) {
    min-width: 270px;
  }

  @media screen and (min-width: 461px) and (max-width: 4790px) {
    min-width: 290px;
  }

  @media screen and (min-width: 480px) and (max-width: 767px) {
    min-width: 350px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    min-width: 216px;
    height: 32px;
    padding-left: 12px;
    margin-right: 25px;
    margin-left: 24px;

    font-size: 18px;
    line-height: 25px;
  }

  @media screen and (min-width: 1280px) {
    min-width: 216px;
    height: 32px;
    padding-left: 12px;

    font-size: 18px;
    line-height: 25px;
  }
`;

export const InfoBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 20px;
  height: 20px;
  background: #fdf7f2;
  border: none;
  border-radius: 50%;
  backdrop-filter: blur(2px);
  margin-left: 9px;
  margin-right: 12px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 32px;
    height: 32px;
    // margin-right: 16px;
    // margin-left: 24px;
  }

  @media screen and (min-width: 1280px) {
    width: 32px;
    height: 32px;
    margin-right: 16px;
    margin-left: 24px;
  }
`;
