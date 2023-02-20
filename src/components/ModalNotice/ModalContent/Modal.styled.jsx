import styled from 'styled-components';

export const ModalThumb = styled.div`
position: relative;

 
  background-color: white;
  padding: 20px;
  border-radius: 5px;
`;

export const CloseModalButton = styled.div`
position: absolute;
top: 20px;
right: 20px;
display: flex;
align-items: center;
justify-content: center;
width: 34px;
height: 34px;
background: ${props => props.theme.colors.background.primary};
backdrop-filter: blur(2px);
border-radius: 50%;

`;
