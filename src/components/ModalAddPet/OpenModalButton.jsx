import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const OpenModalButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.background.button};
`;
const animatedOpenButton = ({ children, handlClick }) => {
  return (
    <OpenModalButton onClick={handlClick} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      {children}
    </OpenModalButton>
  );
};

animatedOpenButton.propTypes = {
  handlClick: PropTypes.func,
  children: PropTypes.element,
};

export default animatedOpenButton;
