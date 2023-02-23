import {
  PetInfoList,
  PetInfoItem,
  PetInfoDeleteBtn,
  PetInfoWrapper,
  PetInfoImg,
  PetInfoContainer,
  PetInfo,
} from './PetsList.styled';
import { DeleteMyPetIcon } from '../../components/icons/DeleteMyPetIcon';
import defaultImage from '../../images/cat.png';

export const PetsList = () => {
  const imageUrl = defaultImage;

  return (
    <PetInfoList>
      <PetInfoItem>
        <PetInfoDeleteBtn type="button">
          <DeleteMyPetIcon />
        </PetInfoDeleteBtn>
        <PetInfoWrapper>
          <PetInfoImg src={imageUrl} alt="Pet" />
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
      <PetInfoItem>
        <PetInfoDeleteBtn type="button">
          <DeleteMyPetIcon />
        </PetInfoDeleteBtn>
        <PetInfoWrapper>
          <PetInfoImg src={imageUrl} alt="Pet" />
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
  );
};
