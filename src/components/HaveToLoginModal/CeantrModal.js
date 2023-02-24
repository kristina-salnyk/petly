import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import OpenModalButton from './OpenModalButton';

const ModalContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h1 {
    color: #f59256;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-around;
`;

export const ButtonCancel = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  border: 2px solid #f59256;
  background: #fdf7f2;
  color: #111111;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 19px;
  width: 150px;
  height: 30px;

  :hover {
    color: #ffffff;
    background-color: #f59256;
  }
`;

export const ButtonSignIn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  border: 2px solid #f59256;
  background: #f59256;
  color: #ffffff;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 19px;
  width: 150px;
  height: 30px;

  :hover {
    color: #ffffff;
    background-color: #f59256;
  }
`;
export const Text = styled.h2`
  font-size: 20px;
  display: flex;
  justify-content: center;
  padding:30px;
`;

export function CeantrModal() {
  const [isOpen, toggle] = useState(false);

  function handlOpenModal(open) {
    console.log('close modal');
    toggle(open);
  }

  return (
    <>
      <OpenModalButton handlClick={() => handlOpenModal(true)}>
        Open modal
      </OpenModalButton>
      <Modal isOpen={isOpen} handleClose={() => handlOpenModal(false)}>
        <ModalContent>
          <Text>
            Dear customer, to add a product to your favorites, you need to go
            through authorization.
          </Text>
          <ButtonContainer>
            <ButtonSignIn>Sing In</ButtonSignIn>
          </ButtonContainer>
        </ModalContent>
      </Modal>
    </>
  );
}