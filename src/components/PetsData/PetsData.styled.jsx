import styled from 'styled-components';

export const PetsDataWrapper = styled.div`
  margin-top: 48px;
  margin-left: 20px;
  margin-right: 20px;

  @media screen and (min-width: 480px) and (max-width: 767px) {
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1280px) {
    width: 821px;
    margin-top: 0;
    margin-left: 32px;
    padding-right: 16px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MyPetsTitle = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.04em;
  color: #111111;

  @media screen and (min-width: 1280px) {
    font-size: 28px;
    line-height: 38px;
  }
`;

export const AddPetWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const AddPetText = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  color: #111111;

  margin-right: 12px;
`;

export const AddPetBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: #f59256;

  // @media screen and (min-width: 1280px) {
  //   margin-right: 16px;
  // }
`;
