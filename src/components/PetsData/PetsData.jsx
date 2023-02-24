import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useFormik } from 'formik';
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

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 80px 0px;

  @media screen and (max-width: 720px) {
    padding: 0px 20px 0px;
  }
`;

export const Form = styled.form``;

export const PetsData = () => {
  const [isOpen, toggle] = useState(false);
  const [isOpenSecond, toggleSecond] = useState(false);

  const dispatch = useDispatch();

  const closeModal = () => toggle(prev => !prev);
  const closeModalSecond = () => toggleSecond(prev => !prev);
  const formik = useFormik({
    initialValues: {
      name: '',
      birth: '',
      breed: '',
      comments: '',
      image: '',
    },
    onSubmit: values => Notify.failure(JSON.stringify(values, null, 2)),
  });

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addPet(formik.values));
    console.log(formik.values);
    formik.resetForm();
    closeModal();
    closeModalSecond();
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
              <Form onSubmit={formik.handleSubmit}>
                <ModalContent>
                  <HeaderModal>
                    <TitleModal>Add pet</TitleModal>
                  </HeaderModal>
                  <MainModal>
                    <LabelInput>Name pet</LabelInput>
                    <InputModal
                      onChange={formik.handleChange}
                      value={formik.values.name}
                      type="text"
                      name="name"
                      placeholder="Type name pet"
                    />

                    <LabelInput>Date of birth</LabelInput>
                    <InputModal
                      onChange={formik.handleChange}
                      value={formik.values.birth}
                      type="date"
                      name="birth"
                      placeholder="Type date of birth"
                    />

                    <LabelInput>Breed</LabelInput>
                    <InputModal
                      onChange={formik.handleChange}
                      value={formik.values.breed}
                      type="text"
                      name="breed"
                      placeholder="Type breed"
                    />
                    <FooterModal>
                      <ButtonModal
                        onClick={() => handlOpenModal(false)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        Cancel
                      </ButtonModal>
                      <SecondOpenModalButton
                        type="submit"
                        handlClick={() => secondHandlOpenModal(true)}
                      >
                        Next
                      </SecondOpenModalButton>
                    </FooterModal>
                  </MainModal>
                </ModalContent>
              </Form>
            </ModalAddPet>
          )}
          {isOpenSecond === true && (
            <SecondModal
              isOpenSecond={isOpenSecond}
              handleClose={() => secondHandlOpenModal(false)}
            >
              <Form onSubmit={formik.handleSubmit}>
                <ModalContent>
                  <HeaderModalSecond>
                    <TitleModalSecond>Add pet</TitleModalSecond>
                  </HeaderModalSecond>
                  <MainModalSecond>
                    <TextModal>Add photo and some comments</TextModal>
                    <BoxFileModalSecond>
                      <LabelModalSecond>
                        <InputModalSecond
                          onChange={formik.handleChange}
                          value={formik.values.image}
                          type="file"
                          name="image"
                        />
                        <AddPhotoOfPetIcon />
                      </LabelModalSecond>
                    </BoxFileModalSecond>
                  </MainModalSecond>
                  <BoxTextereaModalSecond>
                    <TextModal>Comments</TextModal>
                    <TextareaModalSecond
                      onChange={formik.handleChange}
                      value={formik.values.comments}
                      type="text"
                      name="comments"
                      placeholder="Type comments"
                    />
                  </BoxTextereaModalSecond>
                  <FooterModalSecond>
                    <SecondButtonModal
                      onClick={() => secondHandlOpenModal(false)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      Back
                    </SecondButtonModal>
                    <SecondButtonModal
                      onClick={handleSubmit}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      type="submit"
                    >
                      Done
                    </SecondButtonModal>
                  </FooterModalSecond>
                </ModalContent>
              </Form>
            </SecondModal>
          )}
        </AddPetWrapper>
      </TitleWrapper>
      <PetsList />
    </PetsDataWrapper>
  );
};
PetsData.propTypes = {
  handleClose: PropTypes.func,
  isOpen: PropTypes.bool,
};
