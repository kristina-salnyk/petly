import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { addNotice } from '../../redux/notices/operations';
import { CloseModalIcon } from '../icons/CloseModalIcon';
import { MalePetIcon } from '../icons/MalePetIcon';
import { AddPhotoOfPetIcon } from '../icons/AddPhotoOfPetIcon';
import { FemalePetIcon } from '../icons/FemalePetIcon';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  IconWrapper,
  Background,
  FerstModalWrapper,
  SecondModalWrapper,
  ModalContent,
  CloseModalButton,
  Title,
  Button,
  FerstForm,
  SecondForm,
  Input,
  Label,
  P,
  Categories,
  Category,
  GenderWrapper,
  GenderItem,
  GenderInput,
  GenderP,
  GenderLabel,
  FileBox,
  Comments,
  CategoryWrap,
  ButtonWrapper,
  AddedImage,
  Star,
  GenderTitle,
} from './ModalAddNotice.styled';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { noticesSchema } from '../../utils/schemas/notices';

export const ModalAddNotice = ({ showModal, setShowModal }) => {
  const [active, setActive] = useState('FerstWraper');
  const [categori, setCategory] = useState('sell');
  const [image, setImage] = useState(null);
  const [gender, setGender] = useState('male');
  const formik = useFormik({
    initialValues: {
      category: '',
      title: '',
      name: '',
      birthday: '',
      breed: '',
      gender: '',
      location: '',
      price: '',
      image: '',
      comments: '',
    },
    validationSchema: noticesSchema,
    onSubmit: values => {
      console.log('form data', values);
    },
  });

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  const closeModal = () => setShowModal(prev => !prev);
  const dispatch = useDispatch();

  const handleGender = e => (formik.values.gender = e.target.value);
  const handleCategory = e => (formik.values.category = e.target.value);

  const onImageChange = e => {
    const { files } = e.currentTarget;
    if (files) {
      setImage(URL.createObjectURL(files[0]));
      formik.setFieldValue('image', files[0]);
    }
  };
  const handleNextButtonClick = () => {
    if (!formik.values.category) {
      Notify.failure('Categori is required!');
      return;
    }
    if (!formik.values.title) {
      Notify.failure('title is required!');
      return;
    }

    setActive('SecondWraper');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!formik.values.gender) {
      Notify.failure('gender is required!');
      return;
    }
    if (!formik.values.location) {
      Notify.failure('location is required!');
      return;
    }
    Notify.success('pets criated!!!');
    closeModal();
    dispatch(addNotice({ ...formik.values }));
    formik.resetForm();
  };

  return (
    <>
      {showModal ? (
        <Background>
          {active === 'FerstWraper' && (
            <FerstModalWrapper showModal={showModal}>
              {' '}
              <div>
                <Title> Add Pet</Title>
                <P>Enter information about your pet. All fields are required</P>{' '}
              </div>
              <ModalContent>
                <Categories>
                  <label>
                    <CategoryWrap
                      onClick={() => {
                        setCategory('lost/found');
                      }}
                      style={{
                        backgroundColor: categori === 'lost/found' && '#F59256',
                        color: categori === 'lost/found' && '#FFFFFF',
                      }}
                    >
                      lost/found
                    </CategoryWrap>
                    <Category
                      type="radio"
                      name="lost-found"
                      value="lost-found"
                      onChange={e => handleCategory(e)}
                    ></Category>
                  </label>
                  <label>
                    <CategoryWrap
                      onClick={() => {
                        setCategory('in good hands');
                      }}
                      style={{
                        backgroundColor: categori === 'in good hands' && '#F59256',
                        color: categori === 'in good hands' && '#FFFFFF',
                      }}
                    >
                      in good hands
                    </CategoryWrap>
                    <Category
                      type="radio"
                      name="in-good-hands"
                      value="in-good-hands"
                      onChange={e => handleCategory(e)}
                    ></Category>
                  </label>
                  <label>
                    <CategoryWrap
                      onClick={() => {
                        setCategory('sell');
                      }}
                      style={{
                        backgroundColor: categori === 'sell' && '#F59256',
                        color: categori === 'sell' && '#FFFFFF',
                      }}
                    >
                      sell
                    </CategoryWrap>
                    <Category
                      type="radio"
                      name="sell"
                      value="sell"
                      onChange={e => handleCategory(e)}
                    ></Category>
                  </label>
                </Categories>

                <FerstForm onSubmit={formik.handleSubmit}>
                  <Label htmlFor="text">
                    Tittle of ad<Star>*</Star>
                  </Label>
                  <Input
                    onChange={formik.handleChange}
                    type="text"
                    name="title"
                    value={formik.values.title}
                    required
                    autoFocus
                    placeholder="Type title"
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.title && formik.errors.title ? (
                    <div style={{ color: 'red' }}>{formik.errors.title}</div>
                  ) : null}

                  <Label htmlFor="name ">Name pet</Label>
                  <Input
                    onChange={formik.handleChange}
                    type="text"
                    name="name"
                    value={formik.values.name}
                    required
                    autoFocus
                    placeholder="Type name pet"
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div style={{ color: 'red' }}>{formik.errors.name}</div>
                  ) : null}

                  <Label htmlFor="Date">Date of birth </Label>
                  <Input
                    onChange={formik.handleChange}
                    type="date"
                    name="birthday"
                    value={formik.values.birthday}
                    required
                    autoFocus
                    placeholder="Type date of birth "
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.date && formik.errors.date ? (
                    <div style={{ color: 'red' }}>{formik.errors.date}</div>
                  ) : null}
                  <Label htmlFor="Breed">Breed</Label>
                  <Input
                    onChange={formik.handleChange}
                    type="text"
                    name="breed"
                    value={formik.values.breed}
                    placeholder="Type breed"
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.breed && formik.errors.breed ? (
                    <div style={{ color: 'red' }}>{formik.errors.breed}</div>
                  ) : null}
                  <ButtonWrapper>
                    <Button margin onClick={() => setShowModal(prev => !prev)}>
                      Cancel
                    </Button>
                    <Button onClick={handleNextButtonClick}>Next</Button>
                  </ButtonWrapper>
                </FerstForm>

                <CloseModalButton area-label="Close modal" onClick={closeModal}>
                  <CloseModalIcon color={'black'} />
                </CloseModalButton>

                <CloseModalIcon />
              </ModalContent>
            </FerstModalWrapper>
          )}
          {active === 'SecondWraper' && (
            <SecondModalWrapper>
              <div>
                <Title> Add Pet</Title>
              </div>

              <ModalContent>
                <GenderWrapper>
                  <GenderTitle>
                    The Sex<Star>*</Star>:
                  </GenderTitle>
                  <GenderItem>
                    <GenderLabel
                      onClick={() => {
                        setGender('male');
                      }}
                    >
                      <MalePetIcon />
                      <GenderP
                        style={{
                          color: gender === 'male' && '#F59256',
                        }}
                      >
                        Male
                      </GenderP>
                      <GenderInput
                        type="radio"
                        name="male"
                        value="male"
                        onChange={e => handleGender(e)}
                      />
                    </GenderLabel>
                  </GenderItem>
                  <GenderItem>
                    <GenderLabel
                      onClick={() => {
                        setGender('female');
                      }}
                    >
                      <FemalePetIcon />
                      <GenderP
                        style={{
                          color: gender === 'female' && '#F59256',
                        }}
                      >
                        Female
                      </GenderP>
                      <GenderInput
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={e => handleGender(e)}
                      />
                    </GenderLabel>
                  </GenderItem>
                </GenderWrapper>
                <SecondForm onSubmit={formik.handleSubmit}>
                  <Label top htmlFor="text">
                    Location<Star>*</Star>:
                  </Label>
                  <Input
                    onChange={formik.handleChange}
                    type="location"
                    name="location"
                    value={formik.values.location}
                    required
                    autoFocus
                    placeholder="Location"
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.location && formik.errors.location ? (
                    <div style={{ color: 'red' }}>{formik.errors.location}</div>
                  ) : null}
                  {categori === 'sell' && (
                    <>
                      <Label htmlFor="text">
                        Price<Star>*</Star>:
                      </Label>
                      <Input
                        bottom
                        onChange={formik.handleChange}
                        type="text"
                        name="price"
                        value={formik.values.price}
                        required
                        autoFocus
                        placeholder="price"
                        onBlur={formik.handleBlur}
                      ></Input>
                    </>
                  )}
                  <GenderTitle>Load the pet’s image</GenderTitle>
                  {formik.values.image === '' ? (
                    <FileBox htmlFor="image">
                      <label>
                        <AddPhotoOfPetIcon />
                        <GenderInput
                          id="image"
                          name="image"
                          type="file"
                          accept=".png, .jpg, .jpeg"
                          onChange={e => {
                            formik.handleChange(e);
                            onImageChange(e);
                          }}
                        />
                      </label>
                    </FileBox>
                  ) : (
                    <AddedImage>
                      <img alt="pet" src={image} />
                    </AddedImage>
                  )}

                  <Label htmlFor="text">Comments:</Label>
                  <Comments
                    onChange={formik.handleChange}
                    name="comments"
                    value={formik.values.comments}
                    autoFocus
                    placeholder="Comments"
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.comments && formik.errors.comments ? (
                    <div style={{ color: 'red' }}>{formik.errors.comments}</div>
                  ) : null}
                  <ButtonWrapper btn mobBtn>
                    <Button
                      margin
                      onClick={() => {
                        setActive('FerstWraper');
                      }}
                    >
                      Back
                    </Button>

                    <Button onClick={handleSubmit}>Done</Button>
                  </ButtonWrapper>
                </SecondForm>

                <CloseModalButton
                  area-label="Close modal"
                  onClick={() => setShowModal(prev => !prev)}
                >
                  <CloseModalIcon color={'black'} />
                </CloseModalButton>
              </ModalContent>
            </SecondModalWrapper>
          )}
        </Background>
      ) : null}
    </>
  );
};

ModalAddNotice.propTypes = {
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
};
