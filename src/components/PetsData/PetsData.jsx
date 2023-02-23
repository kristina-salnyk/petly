import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Formik, Form, ErrorMessage } from 'formik';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import {
  PetsDataWrapper,
  TitleWrapper,
  MyPetsTitle,
  AddPetWrapper,
  AddPetText,
} from './PetsData.styled';
import { PetsList } from '../PetsList/PetsList';
import { AddPetCrossIcon } from '../../components/icons/AddPetCrossIcon';
import { AddPhotoOfPetIcon } from '../icons/AddPhotoOfPetIcon';
import { addPet } from '../../redux/pets/operations';

import {
  HeaderModal,
  TitleModal,
  MainModal,
  InputModal,
  LabelInput,
  FooterModal,
  ButtonModal,
} from './ModalStyle.styled';

import {
  HeaderModalSecond,
  MainModalSecond,
  TitleModalSecond,
  FooterModalSecond,
  InputModalSecond,
  TextModal,
  LabelModalSecond,
  BoxFileModalSecond,
  TextareaModalSecond,
  BoxTextereaModalSecond,
  SecondButtonModal,
} from './ModalStyledSecond.styled';

import ModalAddPet from '../ModalAddPet/ModalAddPet';
import OpenModalButton from '../ModalAddPet/OpenModalButton';

import SecondModal from '../ModalAddPet/SecondModal';
import SecondOpenModalButton from '../ModalAddPet/SecondOpenModalButton';

export const ModalContent = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 0px 80px 0px;

  @media screen and (max-width: 720px) {
    padding: 0px 20px 0px;
  }
`;

export const PetsData = () => {
  const [isOpen, toggle] = useState(false);
  const [isOpenSecond, toggleSecond] = useState(false);

  const dispatch = useDispatch();

  let pet = useSelector(state => state.pets.items);

  const onPet = data => {
    dispatch(addPet(data));
  };

  const initialValue = {
    name: '',
    birth: '',
    breed: '',
    comments: '',
    petImage: '',
  };

  const handleSubmitModal = (values, actions) => {
    pet = {
      name: values.name,
      birth: values.birth,
      breed: values.breed,
      comments: values.comments,
      petImage: values.petImage,
    };
    actions.resetForm();
    return onPet(pet);
  };

  function handlOpenModal(open) {
    console.log('close modal');
    toggle(open);
  }

  function secondHandlOpenModal(open) {
    console.log('close modal');
    toggleSecond(open);
  }

  return (
    <PetsDataWrapper>
      <TitleWrapper>
        <MyPetsTitle>My pets:</MyPetsTitle>
        <AddPetWrapper>
          <AddPetText>Add pet</AddPetText>
          <OpenModalButton handlClick={() => handlOpenModal(true)}>
            <AddPetCrossIcon />
          </OpenModalButton>
          {isOpenSecond === false && (
            <ModalAddPet isOpen={isOpen} handleClose={() => handlOpenModal(false)}>
              <Formik initialValues={initialValue} onSubmit={handleSubmitModal}>
                <ModalContent>
                  <HeaderModal>
                    <TitleModal>Add pet</TitleModal>
                  </HeaderModal>
                  <MainModal>
                    <LabelInput>Name pet</LabelInput>
                    <InputModal type="text" name="name" placeholder="Type name pet" />
                    <ErrorMessage
                      name="name"
                      render={msg => Notify.warning(`${msg}`, { timeout: 2000 })}
                    />
                    <LabelInput>Date of birth</LabelInput>
                    <InputModal type="number" name="date" placeholder="Type date of birth" />
                    <ErrorMessage
                      name="date"
                      render={msg => Notify.warning(`${msg}`, { timeout: 2000 })}
                    />
                    <LabelInput>Breed</LabelInput>
                    <InputModal type="text" name="breed" placeholder="Type breed" />
                    <ErrorMessage
                      name="breed"
                      render={msg => Notify.warning(`${msg}`, { timeout: 2000 })}
                    />
                    <FooterModal>
                      <ButtonModal onClick={() => handlOpenModal(false)}>Cancel</ButtonModal>
                      <SecondOpenModalButton
                        type="submit"
                        handlClick={() => secondHandlOpenModal(true)}
                      >
                        Next
                      </SecondOpenModalButton>
                    </FooterModal>
                  </MainModal>
                </ModalContent>
              </Formik>
            </ModalAddPet>
          )}
          {isOpenSecond === true && (
            <SecondModal
              isOpenSecond={isOpenSecond}
              handleClose={() => secondHandlOpenModal(false)}
            >
              <Formik initialValues={initialValue} onSubmit={handleSubmitModal}>
                <ModalContent>
                  <HeaderModalSecond>
                    <TitleModalSecond>Add pet</TitleModalSecond>
                  </HeaderModalSecond>
                  <MainModalSecond>
                    <TextModal>Add photo and some comments</TextModal>
                    <BoxFileModalSecond>
                      <LabelModalSecond>
                        <InputModalSecond type="file" name="photo" />
                        <ErrorMessage
                          name="photo"
                          render={msg => Notify.warning(`${msg}`, { timeout: 2000 })}
                        />
                        <AddPhotoOfPetIcon />
                      </LabelModalSecond>
                    </BoxFileModalSecond>
                  </MainModalSecond>
                  <BoxTextereaModalSecond>
                    <TextModal>Comments</TextModal>
                    <TextareaModalSecond type="text" name="comments" placeholder="Type comments" />
                    <ErrorMessage
                      name="comments"
                      render={msg => Notify.warning(`${msg}`, { timeout: 2000 })}
                    />
                  </BoxTextereaModalSecond>
                  <FooterModalSecond>
                    <SecondButtonModal onClick={() => secondHandlOpenModal(false)}>
                      Back
                    </SecondButtonModal>
                    <SecondButtonModal
                      onClick={() => secondHandlOpenModal(false)}
                      handlClick={() => handlOpenModal(false)}
                      type="submit"
                    >
                      Done
                    </SecondButtonModal>
                  </FooterModalSecond>
                </ModalContent>
              </Formik>
            </SecondModal>
          )}
        </AddPetWrapper>
      </TitleWrapper>
      <PetsList />
    </PetsDataWrapper>
  );
};
