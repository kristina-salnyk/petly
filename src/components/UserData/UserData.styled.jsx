import styled from 'styled-components';

export const UserDataWrapper = styled.div``;

export const MyInformation = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.04em;
  color: #111111;
  padding-left: 20px;
  margin-bottom: 18px;

  @media screen and (min-width: 480px) and (max-width: 767px) {
    max-width: 480px;
    padding-left: 0;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 736px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 0;
    padding-left: 32px;
    font-size: 28px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 28px;
    line-height: 38px;
    padding-left: 17px;
    margin-bottom: 24px;
  }
`;

export const InformationBackgroundBlock = styled.div`
  position: relative;

  margin-left: 20px;
  margin-right: 20px;
  min-width: 280px;
  height: 537px;
  background-color: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;

  @media screen and (min-width: 480px) and (max-width: 767px) {
    max-width: 480px;

    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    // margin-left: 0;
    // margin-right: 32px;

    width: 736px;

    margin-left: auto;
    margin-right: auto;
    height: 311px;
    border-radius: 40px;
  }

  @media screen and (min-width: 1280px) {
    margin-left: 0;
    margin-right: 0;
    width: 411px;
    height: 541px;

    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
    border-radius: 0px 40px 40px 0px;
  }
`;

export const ProfileImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding-top: 24px;
    padding-bottom: 54px;
    padding-right: 40px;
  }
`;

export const ProfileImgBtn = styled.input`
  width: auto;
  height: auto;
  display: none;
  border-radius: 50%;

  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  border-radius: 50%;
`;

export const ProfileImg = styled.img`
  width: 233px;
  height: 233px;
  border-radius: 50%;
  cursor: pointer;
`;

export const PhotoEditWrapper = styled.div`
  position: absolute;
  top: 240px;
  right: 20px;

  display: flex;

  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  padding: 4px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    top: 260px;
    right: 45px;
  }

  @media screen and (min-width: 1280px) {
    top: 210px;
    left: 290px;
    right: 0;
  }
`;

export const PhotoEditInput = styled.input`
  display: none;
`;

export const PhotoEditSpan = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: #111111;
  margin-left: 4px;

  @media screen and (min-width: 1280px) {
  }
`;
