import { NavLink } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FerstModalWrapper = styled.div`
  width: 280px;
  height: 813px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: ${props=>props.theme.colors.white};
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
    width: 608px;
    height: 100%;
  }
  
`;

export const SecondModalWrapper = styled.div`
  width: 280px;
  height: 855px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: ${props=>props.theme.colors.white};
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
    width: 608px;
   height: 100%;
  }

`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8
`;


export const Title = styled.h1`
  height: 33px;
  position: absolute;
  left: 90px;
  top: 20px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]})  {
    left: 240px;
    top: 10px;
    font-size: 36px;
    line-height: 49px;
  }
`;

export const P = styled.p`
position: absolute;
left: 10px;
right: 10px;
top: 40px;
text-align: center;
letter-spacing: -0.01em;
color: ${props=>props.theme.colors.black};
@media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
  left: 40px;
  top: 60px;
}
`

export const ButtonCansel = styled.button`
  width: 240px;
  height: 40px;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 40px;
  position: absolute;
  left: 20px;
  top: 510px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: ${props=>props.theme.colors.black};
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
    width: 180px;
    height: 44px;
    left: 100px;
    top: 590px;
  }
`;

export const ButtonNext = styled.button`
  width: 240px;
  height: 40px;
  background: #f59256;
  border-radius: 40px;
  position: absolute;
  left: 20px;
  top: 560px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: ${props=>props.theme.colors.white};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}){
    width: 180px;
    height: 44px;
    left: 320px;
    top: 590px;
  }
`;


export const CloseModalButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 10px;
 left: 230px;
  width: 38px;
  height: 38px;
  padding: 0;
  z-index: 10;
  border-radius: 50%;
  background: ${props=>props.theme.colors.white};
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}){
    top: 10px;
    left: 540px;
    width: 38px;
  height: 38px;
  }
`;

export const Form = styled.form`
  width: 240px;
  left: 20px;
  top: 180px;
  position: absolute;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
    width: 448px;
    left: 80px;
    top: 170px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  margin-bottom: 10px;
  padding: 10px 52px 8px 20px;
  @media (min-width: 768px) {
    width: 100%;
    height: 48px;
    margin-bottom: 20px;
  }
    ::placeholder {
    font-family: 'Inter';
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #535353;
    padding-left: 10px;
    }
`;
export const Label = styled.label`
  height: 27px;
  margin-bottom: 5px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  display: flex;
  align-items: center;
  color: #111111;
  @media (min-width: 768px) {
    height: 27px;
    margin-bottom: 10px;
    font-weight: 500;
    font-size: 24px;
    line-height: 26px;
  }
`;

export const Categories = styled.div`
  position: absolute;
  top: 100px;
  left: 20px;
  gap: ${({ theme }) => theme.spacing[3]}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
    position: absolute;
    top: 100px;
   left: 100px;
  }
  `;

export const Category = styled(NavLink)`
  padding: 2px 20px;
  margin-left: 5px;   
  display: inline-block;
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  border: 2px solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.shape.borderRadius.l}px;
 
  
  &.active {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.white};
    &:hover {
      background-color: ${({ theme }) => theme.colors.hoverAccent};
    }
  }
  &:hover {
    border-color: ${({ theme }) => theme.colors.hoverAccent};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
    padding: 2px 20px;  
    margin-left: 10px; 
    font-size: ${({ theme }) => theme.typography.size.m};
  }
`;

export const SexWrapper = styled.div`
display: flex;
position: absolute;
top: 80px;
` 
export const SexItem = styled.div`
width: 36px;
hight: 36px;
margin-left: 80px;
` 
export const SexLabel = styled.label`
color: ${({ theme }) => theme.colors.black};
&:hover {
  color: ${({ theme }) => theme.colors.hoverAccent};
}
&:active {
  color: ${({ theme }) => theme.colors.hoverAccent};
}
@media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
  color: ${({ theme }) => theme.colors.black};
  &:hover {
    color: ${({ theme }) => theme.colors.hoverAccent};
  }
  &:active {
    color: ${({ theme }) => theme.colors.hoverAccent};
  }
}
`;

export const SexP = styled.p`

`
export const SexInput = styled.input`
width: 36px;
hight: 36px;
display: none;
` 
export const FileBox = styled.div`
width: 140px;
height: 140px;
background: #fdf7f2;
border-radius: 20px;
`
export const Comments = styled.textarea`
  width: 100%;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  margin-bottom: 10px;
  padding: 10px 52px 8px 20px;
  @media (min-width: 768px) {
    width: 100%;
    height: 48px;
    margin-bottom: 20px;
  }
    ::placeholder {
    font-family: 'Inter';
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #535353;
    padding-left: 10px;
    }
`; 
export const ButtonWrapper = styled.div`
position: absolute;
left: 0px;
top: 70px;
@media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}){
  left: 20px;
  top: 30px;
}
`

export const GlobalStyle = createGlobalStyle`
box-sizing: border-box;
margin: 0;
padding: 0;
font-family: 'Arial', sans-serif;
`;

