import styled from 'styled-components';

export const PetInfoList = styled.ul`
  margin-top: 25px;
  padding-bottom: 80px;

  @media screen and (min-width: 1280px) {
    padding-bottom: 40px;
  }
`;

export const PetInfoItem = styled.li`
  position: relative;
  height: auto;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 40px;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 1280px) {
    width: 821px;
    margin-bottom: 22px;
  }
`;

export const PetInfoDeleteBtn = styled.button`
  position: absolute;
  top: 265px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 44px;
  height: 44px;
  background: none;
  border: none;
  border-radius: 50%;

  @media screen and (min-width: 1280px) {
    top: 15px;
    left: 760px;
    background: #fdf7f2;
    backdrop-filter: blur(2px);
  }
`;

export const PetInfoWrapper = styled.div`
  display: block;
  padding: 16px 20px 20px 20px;

  @media screen and (min-width: 1280px) {
    display: flex;
    padding: 20px;
  }
`;

export const PetInfoImg = styled.img`
  width: 240px;
  height: auto;

  @media screen and (min-width: 1280px) {
    display: block;
    width: 161px;
    height: 161px;
  }
`;

export const PetInfoContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;

  @media screen and (min-width: 1280px) {
    margin-left: 32px;
    margin-top: 0;
    margin-bottom: 0;
  }
`;
export const PetInfo = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: #111111;
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
`;
