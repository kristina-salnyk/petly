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

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPets } from '../../redux/pets/selectors';
import { fetchPets, deletePet } from '../../redux/pets/operations';

export const PetsList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);

  const pets = useSelector(selectPets);

  const handleDelete = petId => {
    return dispatch(deletePet(petId));
  };

  if (pets.length === 0) {
    return (
      <p>
        <br />
        You have&apos;t added pets
      </p>
    );
  }

  return (
    <PetInfoList>
      {pets.map(({ _id, birthday, breed, comments, name, petImage }) => (
        <PetInfoItem key={_id}>
          <PetInfoDeleteBtn type="button">
            <DeleteMyPetIcon
              onClick={() => {
                handleDelete(_id);
              }}
            />
          </PetInfoDeleteBtn>
          <PetInfoWrapper>
            <PetInfoImg src={petImage || defaultImage} alt="Pet" />
            <PetInfoContainer>
              <PetInfo>Name: {name}</PetInfo>
              <PetInfo>Date of birth: {birthday}</PetInfo>
              <PetInfo>Breed: {breed}</PetInfo>
              <PetInfo>Comments: {comments}</PetInfo>
            </PetInfoContainer>
          </PetInfoWrapper>
        </PetInfoItem>
      ))}
    </PetInfoList>
  );
};
