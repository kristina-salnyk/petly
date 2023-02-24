import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { addNotice } from '../../redux/notices/operations';
import { CloseModalIcon } from '../icons/CloseModalIcon';
import { MalePetIcon } from '../icons/MalePetIcon';
import { AddPhotoOfPetIcon } from '../icons/AddPhotoOfPetIcon';
import { FemalePetIcon } from '../icons/FemalePetIcon';
import {
  Background,
  FerstModalWrapper,
  SecondModalWrapper,
  ModalContent,
  CloseModalButton,
  Title,
  ButtonCansel,
  ButtonNext,
  Form,
  Input,
  Label,
  P,
  Categories,
  Category,
  SexWrapper,
  SexItem,
  SexInput,
  SexP,
  SexLabel,
  FileBox,
  Comments,
  ButtonWrapper,
} from './ModalAddNotice.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectNotices } from '../../redux/notices/selectors';

//   const isLoading = useSelector(selectIsLoading);
export const ModalAddNotice = ({ showModal, setShowModal }) => {
  const [active, setActive] = useState('FerstWraper');

  const [formData, setFormData] = useState({
    title: '',
    name: '',
    birthday: '',
    breed: '',
    theSex: '',
    location: '',
    price: '',
    image: '',
    comments: '',
  });

  const modalRef = useRef();

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

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  // const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);
  const isAdded = useSelector(selectNotices);
  console.log(isAdded);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    if (isError) {
      console.log('произошла ошибка');
    }

    if (isAdded(formData)) {
      return console.log(`${formData.name} is already in contacts`);
    }
    dispatch(addNotice(formData));
    form.reset();
  };

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal}>
          {active === 'FerstWraper' && (
            <FerstModalWrapper showModal={showModal}>
              <ModalContent>
                <Title> Add Pet</Title>
                <P>Enter information about your pet. All fields are required</P>
                <Categories>
                  <Category to="lost-found">lost/found</Category>
                  <Category to="in-good-hands">in good hands</Category>
                  <Category to="sell">sell</Category>
                </Categories>

                <Form>
                  <Label htmlFor="text">Tittle of ad</Label>
                  <Input
                    onChange={e => setFormData({ ...formData, title: e.target.value })}
                    type="text"
                    name="title"
                    value={formData.title}
                    required
                    autoFocus
                    placeholder="Type title"
                  />
                  <Label htmlFor="name ">Name pet</Label>
                  <Input
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    type="text"
                    name="name"
                    value={formData.name}
                    required
                    autoFocus
                    placeholder="Type name pet"
                  />
                  <Label htmlFor="Date">Date of birth </Label>
                  <Input
                    onChange={e => setFormData({ ...formData, birthday: e.target.value })}
                    type="date"
                    name="birthday"
                    value={formData.birthday}
                    required
                    autoFocus
                    placeholder="Type date of birth "
                  />
                  <Label htmlFor="Breed">Breed</Label>
                  <Input
                    onChange={e => setFormData({ ...formData, breed: e.target.value })}
                    type="text"
                    name="breed"
                    value={formData.breed}
                    required
                    autoFocus
                    placeholder="Type breed"
                  />
                </Form>
                <ButtonCansel onClick={() => setShowModal(prev => !prev)}>Cancel</ButtonCansel>
                <ButtonNext
                  onClick={() => {
                    setActive('SecondWraper');
                  }}
                >
                  Next
                </ButtonNext>
                <CloseModalButton
                  area-label="Close modal"
                  onClick={() => setShowModal(prev => !prev)}
                >
                  <CloseModalIcon color={'black'} />
                </CloseModalButton>

                <CloseModalIcon />
              </ModalContent>
            </FerstModalWrapper>
          )}
          {active === 'SecondWraper' && (
            <SecondModalWrapper>
              <ModalContent>
                <Title> Add Pet</Title>
                <SexWrapper>
                  <SexItem>
                    <SexLabel>
                      <MalePetIcon />
                      <SexP>Male</SexP>
                      <SexInput
                        onChange={e => setFormData({ ...formData, male: e.target.value })}
                        type="radio"
                        name="male"
                        value={formData.theSex}
                        required
                      />
                    </SexLabel>
                  </SexItem>
                  <SexItem>
                    <SexLabel>
                      <FemalePetIcon />
                      <SexP>Female</SexP>
                      <SexInput
                        onChange={e => setFormData({ ...formData, female: e.target.value })}
                        type="radio"
                        name="female"
                        value={formData.theSex}
                        required
                      />
                    </SexLabel>
                  </SexItem>
                </SexWrapper>
                <Form>
                  <Label htmlFor="text">Location*:</Label>
                  <Input
                    onChange={e => setFormData({ ...formData, location: e.target.value })}
                    type="location"
                    name="location"
                    value={formData.location}
                    required
                    autoFocus
                    placeholder="Location"
                  ></Input>
                  <Label htmlFor="text">Price*:</Label>
                  <Input
                    onChange={e => setFormData({ ...formData, price: e.target.value })}
                    type="text"
                    name="price"
                    value={formData.price}
                    required
                    autoFocus
                    placeholder="price"
                  ></Input>
                  <FileBox>
                    <label>
                      <SexInput
                        onChange={e => setFormData({ ...formData, image: e.target.value })}
                        type="file"
                        name="image"
                        value={formData.image}
                        required
                      />
                      <AddPhotoOfPetIcon />
                    </label>
                  </FileBox>
                  <Label htmlFor="text">Comments*:</Label>
                  <Comments
                    onChange={e => setFormData({ ...formData, comments: e.target.value })}
                    name="comments"
                    value={formData.comments}
                    autoFocus
                    placeholder="Comments"
                    required
                  ></Comments>
                </Form>
                <ButtonWrapper>
                  <ButtonCansel
                    onClick={() => {
                      setActive('FerstWraper');
                    }}
                  >
                    Back
                  </ButtonCansel>
                  <ButtonNext onSubmit={handleSubmit}>Done</ButtonNext>
                  <CloseModalButton
                    area-label="Close modal"
                    onClick={() => setShowModal(prev => !prev)}
                  >
                    <CloseModalIcon color={'black'} />
                  </CloseModalButton>
                </ButtonWrapper>
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
