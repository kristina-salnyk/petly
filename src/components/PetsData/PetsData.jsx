import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addPet } from '../../redux/pets/operations';
import { useFormik } from 'formik';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { petsSchema } from '../../utils/schemas/pets';

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

import {
  HeaderModal,
  TitleModal,
  MainModal,
  InputModal,
  LabelInput,
  FooterModal,
  ButtonModal,
  ModalContent,
} from './ModalStyle.styled';

import {
  HeaderModalSecond,
  MainModalSecond,
  TitleModalSecond,
  FooterModalSecond,
  InputModalSecond,
  TextModal,
  BoxFileModalSecond,
  TextareaModalSecond,
  BoxTextereaModalSecond,
  SecondButtonModal,
  LabelModalSecondFile,
  AddedImage,
} from './ModalStyledSecond.styled';

import ModalAddPet from '../ModalAddPet/ModalAddPet';
import OpenModalButton from '../ModalAddPet/OpenModalButton';

import SecondModal from '../ModalAddPet/SecondModal';
import SecondOpenModalButton from '../ModalAddPet/SecondOpenModalButton';

export const Form = styled.form``;

export const PetsData = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSecond, setIsOpenSecond] = useState(false);
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      birthday: '',
      breed: '',
      comments: '',
      petImage: '',
    },

    validationSchema: petsSchema,

    onSubmit: values => {
      const data = new FormData();
      data.append('name', values.name);
      data.append('birthday', values.birthday);
      data.append('breed', values.breed);
      data.append('petImage', values.petImage);
      data.append('comments', values.comments);

      dispatch(addPet(data));
      console.log(data);
      handleSubmit();
    },
  });

  const onImageChange = e => {
    const { files } = e.currentTarget;
    if (files) {
      setImage(URL.createObjectURL(files[0]));
      formik.setFieldValue('petImage', files[0]);
    }
  };

  const closeModal = () => setIsOpen(prev => !prev);
  const closeModalSecond = () => setIsOpenSecond(prev => !prev);

  function handlOpenModal(open) {
    setIsOpen(open);
  }

  function secondHandlOpenModal(open) {
    if (formik.values.name === '' || formik.errors.name) {
      return Notify.failure('Name is required!');
    }

    if (!formik.values.birthday) {
      return Notify.failure('birthday is required!');
    }

    if (formik.values.breed === '' || formik.errors.breed) {
      return Notify.failure(`${formik.errors.breed}`);
    }

    setIsOpenSecond(open);
  }

  const handleSubmit = () => {
    console.log(formik.values.petImage);

    // if (formik.values.petImage === '' || formik.errors.petImage) {
    //   return Notify.failure(`${formik.errors.petImage} required`);
    // }

    // console.log(formik.values.comments);

    // if (formik.values.comments === '' || formik.errors.comments) {
    //   return Notify.failure(`${formik.errors.comments} required`);
    // }

    console.log(
      formik.values.name,
      formik.values.birthday,
      formik.values.breed,
      formik.values.comments,
      formik.values.petImage
    );
    formik.resetForm();
    closeModal();
    closeModalSecond();
  };

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
                      id="name"
                      type="string"
                      name="name"
                      placeholder="Type name pet"
                    />
                    <LabelInput placeholder="Type date of birth">Date of birth</LabelInput>
                    <InputModal
                      onChange={formik.handleChange}
                      value={formik.values.birthday}
                      placeholder="Type date of birth"
                      type="date"
                      name="birthday"
                    />
                    <LabelInput>Breed</LabelInput>
                    <InputModal
                      onChange={formik.handleChange}
                      value={formik.values.breed}
                      type="string"
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
                        type="button"
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
              <Form onSubmit={formik.handleSubmit} encType="multipart/form-data">
                <ModalContent>
                  <HeaderModalSecond>
                    <TitleModalSecond>Add pet</TitleModalSecond>
                  </HeaderModalSecond>
                  <MainModalSecond>
                    <TextModal>Add photo and some comments</TextModal>
                    {formik.values.petImage === '' ? (
                      <BoxFileModalSecond htmlFor="imagePet">
                        <LabelModalSecondFile>
                          <AddPhotoOfPetIcon />
                          <InputModalSecond
                            id="imagePet"
                            name="petImage"
                            type="file"
                            accept=".png, .jpg, .jpeg"
                            onChange={e => {
                              formik.handleChange(e);
                              onImageChange(e);
                            }}
                          />
                        </LabelModalSecondFile>
                      </BoxFileModalSecond>
                    ) : (
                      <AddedImage>
                        <img alt="pet" src={image} />
                      </AddedImage>
                    )}
                  </MainModalSecond>
                  <BoxTextereaModalSecond>
                    <TextModal>Comments</TextModal>

                    <TextareaModalSecond
                      onChange={formik.handleChange}
                      value={formik.values.comments}
                      type="string"
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
                      onSubmit={handleSubmit}
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
  isOpenSecond: PropTypes.bool,
  isOpen: PropTypes.bool,
  image: PropTypes.bool,
};
