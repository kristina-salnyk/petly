import styled from 'styled-components';

export const MyInformation = styled.p`
  font-weight: 500;
  font-size: 28px;
  line-height: 38px;
  color: #111111;

  padding-left: 17px;
  margin-bottom: 24px;
`;

export const ProfileImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;

export const ProfileImgBtn = styled.button`
  width: auto;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  border-radius: 50%;
`;

export const ProfileImg = styled.img`
  width: 233px;
  height: 233px;
  border-radius: 50%;
`;

export const PhotoEditButton = styled.button`
  position: absolute;
  top: 280px;
  left: 300px;
  // top: 60%;
  // left: 18%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  padding: 4px;

  &:hover {
    background-color: #fdf7f2;
  }
`;

export const PhotoEditSpan = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: #111111;
  margin-left: 4px;
`;

export const InformationBackgroundBlock = styled.div`
  width: 411px;
  height: 541px;

  background-color: #ffffff;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 0px 40px 40px 0px;
`;
