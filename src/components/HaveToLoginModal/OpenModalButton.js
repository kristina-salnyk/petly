import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const OpenModalButton = styled(motion.button)`
  font-size: 1.2rem;
  padding: 20px;
  border-radius: 50px;
  border: none;
  background-color: #5c3aff;
  color: white;
`;
const animatedOpenButton = ({ children, handlClick }) => {
  return (
    <OpenModalButton
      onClick={handlClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </OpenModalButton>
  );
};

export default animatedOpenButton;