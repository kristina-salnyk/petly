import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CloseModalIcon } from '../icons/CloseModalIcon';
import { motion, AnimatePresence } from 'framer-motion';

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  z-index: 1000;
`;
export const ModalContainer = styled(motion.div)`
  width: 608px;
  height: 570px;
  background-color: ${({ theme }) => theme.colors.white};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  position: relative;
  z-index: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 280px;
    height: 530px;
  }
`;
export const CloseButton = styled.div`
  width: 44px;
  height: 44px;
  position: absolute;
  right: 18px;
  top: 18px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonCancelModal = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  margin-top: 40px;
  border: 2px solid #f59256;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 19px;
  width: 180px;
  height: 44px;
  :hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.background.button};
    scale: 1.1;
    scale: 0.9;
  }
`;

const modalVariant = {
  initial: { opacity: 0 },
  isOpen: { opacity: 1 },
  exit: { opacity: 0 },
};
const containerVariant = {
  initial: { transition: { type: 'spring' } },
  isOpen: { top: '"50%' },
  exit: { top: '-50%' },
};

const ModalAddPet = ({ handleClose, children, isOpen }) => {
  const cancelModalForm = () => {
    handleClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay initial={'initial'} animate={'isOpen'} exit={'exit'} variants={modalVariant}>
          <ModalContainer variants={containerVariant}>
            <CloseButton
              onClick={cancelModalForm}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20.39 20.39"
            >
              <CloseModalIcon color={'black'} />
            </CloseButton>
            {children}
          </ModalContainer>
        </Overlay>
      )}
    </AnimatePresence>
  );
};
export default ModalAddPet;

ModalAddPet.propTypes = {
  handleClose: PropTypes.func,
  children: PropTypes.element,
  isOpen: PropTypes.bool,
};
