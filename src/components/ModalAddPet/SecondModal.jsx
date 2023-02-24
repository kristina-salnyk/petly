import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { CloseModalIcon } from '../icons/CloseModalIcon';
import { motion, AnimatePresence } from 'framer-motion';

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  z-index: 1000;
`;

const ModalContainer = styled(motion.div)`
  width: 608px;
  height: 661px;
  background-color: ${({ theme }) => theme.colors.white};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  position: relative;
  z-index: 550;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 280px;
    height: 670px;
  }
`;

const CloseButton = styled.div`
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

const modalVariant = {
  initial: { opacity: 0 },
  isOpenSecond: { opacity: 1 },
  exit: { opacity: 0 },
};
const containerVariant = {
  initial: { transition: { type: 'spring' } },
  isOpenSecond: { top: '"50%' },
  exit: { top: '-50%' },
};
const SecondModal = ({ handleClose, children, isOpenSecond }) => {
  return (
    <AnimatePresence>
      {isOpenSecond && (
        <Overlay initial={'initial'} animate={'isOpenSecond'} exit={'exit'} variants={modalVariant}>
          <ModalContainer variants={containerVariant}>
            <CloseButton
              onClick={handleClose}
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

export default SecondModal;

SecondModal.propTypes = {
  handleClose: PropTypes.func,
  children: PropTypes.element,
  isOpenSecond: PropTypes.bool,
};
