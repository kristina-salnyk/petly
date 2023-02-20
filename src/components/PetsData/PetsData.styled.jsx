import styled from 'styled-components';

export const PetsDataWrapper = styled.div`
  margin-left: 32px;
  padding-right: 16px;
  width: 821px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MyPetsTitle = styled.p`
  font-weight: 500;
  font-size: 28px;
  line-height: 38px;
  color: #111111;
`;

export const AddPetWrapper = styled.div`
  display: flex;
  align-items: center;
  //   justify-content: center;
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
  margin-right: 16px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: #f59256;
`;

export const PetInfoList = styled.ul`
  margin-top: 24px;
`;

export const PetInfoItem = styled.li`
  position: relative;
  width: 821px;
  height: auto;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 40px;
`;

export const PetInfoDeleteBtn = styled.button`
  position: absolute;
  top: 15px;
  left: 760px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 44px;
  height: 44px;
  background: #fdf7f2;
  backdrop-filter: blur(2px);
  border: none;
  border-radius: 50%;
`;

export const PetInfoWrapper = styled.div`
  display: flex;
  padding: 20px;
`;
export const PetInfoContainer = styled.div`
  margin-left: 32px;
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
