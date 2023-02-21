import {
  PetsDataWrapper,
  TitleWrapper,
  MyPetsTitle,
  AddPetWrapper,
  AddPetText,
  AddPetBtn,
} from './PetsData.styled';
import { PetsList } from '../PetsList/PetsList';
import { AddPetCrossIcon } from '../../components/icons/AddPetCrossIcon';

export const PetsData = () => {
  return (
    <PetsDataWrapper>
      <TitleWrapper>
        <MyPetsTitle>My pets:</MyPetsTitle>
        <AddPetWrapper>
          <AddPetText>Add pet</AddPetText>
          <AddPetBtn type="button">
            <AddPetCrossIcon />
          </AddPetBtn>
        </AddPetWrapper>
      </TitleWrapper>
      <PetsList />
    </PetsDataWrapper>
  );
};
