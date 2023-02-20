import {
  PetsDataWrapper,
  TitleWrapper,
  MyPetsTitle,
  AddPetWrapper,
  AddPetText,
  AddPetBtn,
  PetInfoList,
  PetInfoItem,
  PetInfoDeleteBtn,
  PetInfoWrapper,
  PetInfoContainer,
  PetInfo,
} from './PetsData.styled';
import { AddPetCrossIcon } from '../../components/icons/AddPetCrossIcon';
import { DeleteMyPetIcon } from '../../components/icons/DeleteMyPetIcon';
import defaultImage from '../../images/cat.png';

export const PetsData = () => {
  const imageUrl = defaultImage;
  return (
    <PetsDataWrapper >
      <TitleWrapper>
        <MyPetsTitle>My pets:</MyPetsTitle>
        <AddPetWrapper>
          <AddPetText>Add pet</AddPetText>
          <AddPetBtn type="button">
            <AddPetCrossIcon />
          </AddPetBtn>
        </AddPetWrapper>
      </TitleWrapper>
      <PetInfoList>
        <PetInfoItem>
          <PetInfoDeleteBtn type="button">
            <DeleteMyPetIcon />
          </PetInfoDeleteBtn>
          <PetInfoWrapper>
            <img src={imageUrl} alt="Pet" />
            <PetInfoContainer>
              <PetInfo>Name: Jack</PetInfo>
              <PetInfo>Date of birth: 22.04.2018</PetInfo>
              <PetInfo>Breed: Persian cat</PetInfo>
              <PetInfo>
                Comments: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, labore esse
                velit fugiat dolore itaque quae doloribus corrupti. Sapiente, dolore.
              </PetInfo>
            </PetInfoContainer>
          </PetInfoWrapper>
        </PetInfoItem>
      </PetInfoList>
    </PetsDataWrapper>
  );
};
