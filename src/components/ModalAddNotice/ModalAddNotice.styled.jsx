import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

export const FerstModalWrapper = styled.div`
  width: 280px;
  height: 100vh;
  padding: 40px 20px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: ${props => props.theme.colors.white};
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: absolute;
  z-index: 10;
  border-radius: 10px;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  scrollbar-height: none;
  @media (min-width: 768px) {
    width: 608px;
    max-height: 885px;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    scrollbar-height: auto;
    padding: 40px 80px;
  }
`;

export const TitleWrapper = styled.div`
  margin-bottom: 20px;
`;

export const SecondModalWrapper = styled.div`
  width: 280px;
  height: 100vh;
  padding: 20px 20px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: ${props => props.theme.colors.white};
  /* display: grid;
  grid-template-columns: 1fr 1fr; */
  position: relative;
  z-index: 10;
  border-radius: 10px;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  scrollbar-height: none;
  @media (min-width: 768px) {
    width: 608px;
    max-height: 920px;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    scrollbar-height: none;
    padding: 40px 80px;
  }
`;

export const ModalContent = styled.div`
  border-radius: 20px;
  width: 240px;
  display: flex;
  flex-direction: column;
  top: 0;

  @media (min-width: 768px) {
    width: 420px;
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 2.25rem;
    line-height: 3rem;
  }
`;

export const P = styled.p`
  font-style: normal;
  width: 240px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.375;
  text-align: center;
  letter-spacing: -0.01em;
  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
    width: 443px;
  }
`;

export const Categories = styled.div`
  position: absolute;
  top: 90px;
  left: 15px;
  margin-top: 28px;

  gap: ${({ theme }) => theme.spacing[3]}px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
    position: absolute;
    top: 130px;
    left: 90px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const Category = styled.input`
  display: none;
`;
export const CategoryWrap = styled.div`
  padding: 5px 20px;
  gap: 10px;
  margin-left: 5px;
  margin-top: 10px;
  display: inline-block;
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  border: 2px solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.shape.borderRadius.l}px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.accent};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
    padding: 10px 25px;
    font-size: ${({ theme }) => theme.typography.size.s};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 10px 20px;
    font-size: ${({ theme }) => theme.typography.size.m};
    margin-left: 0;
  }
`;

export const FerstForm = styled.form`
  width: 240px;
  left: 20px;
  top: 210px;
  position: absolute;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
    width: 448px;
    left: 80px;
  }
`;

export const SecondForm = styled.form`
  width: 240px;
  left: 20px;
  top: 220px;
  position: absolute;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
    width: 448px;
    left: 80px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  margin-bottom: 10px;
  padding: 10px 20px 8px 20px;
  @media (min-width: 768px) {
    width: 100%;
    height: 48px;
    margin-bottom: ${props => (props.bottom ? '15px' : '15px')};
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
  margin-bottom: 10px;
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
    margin-bottom: 12px;
    margin-top: ${props => (props.top ? '60px' : '28px')};
    font-weight: 500;
    font-size: 24px;
    line-height: 26px;
    padding-top: 10px;
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  left: 20px;
  margin-top: 20px;
  padding-bottom: 20px;
  align-items: center;
  justify-content: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
    display: flex;
  }
`;

export const Button = styled.button`
  display: block;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  border: 2px solid #f59256;
  background: ${({ theme }) => theme.colors.white};
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
  width: 200px;
  height: 44px;
  margin-bottom: ${props => (props.margin ? '10px' : 0)};
  :hover {
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.accent};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
    left: 320px;
    top: 590px;
    margin-right: ${props => (props.margin ? '10px' : 0)};
    margin-bottom: 0;
  }
`;

export const CloseModalButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 10px;
  left: 230px;
  width: 34px;
  height: 34px;
  display: flex;
  justify-content: center;
  padding: 0;
  z-index: 10;
  border-radius: 50%;
  background: ${props => props.theme.colors.white};
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
    top: 10px;
    left: 540px;
    width: 38px;
    height: 38px;
  }
`;

export const GenderWrapper = styled.div`
  display: flex;
  position: absolute;
  padding: 20px 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
    left: 80px;
  }
`;
export const GenderTitle = styled.p`
  left: 20px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  display: flex;
  align-items: center;
  color: #000000;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
    top: 60px;
    left: 70px;
    font-weight: 500;
    font-size: 24px;
    line-height: 26px;
  }
`;
export const GenderItem = styled.div`
  width: 36px;
  height: 36px;
  margin-right: 50px;
  margin-top: 18px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
    margin-right: 60px;
    margin-top: 20px;
    padding: 20px;
  }
`;
export const GenderLabel = styled.label`
  color: ${({ theme }) => theme.colors.black};
`;

export const GenderP = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  display: flex;
  align-items: center;
  color: #000000;
  color: ${({ theme }) => theme.colors.black};
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
  &:active {
    color: ${({ theme }) => theme.colors.accent};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
    &:active {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;
export const GenderInput = styled.input`
  display: none;
`;

export const FileBox = styled.div`
  margin-top: 10px;
  width: 140px;
  height: 140px;
  background: #fdf7f2;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const AddedImage = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 140px;
  height: 140px;
  border-radius: 20px;
  & > img {
    object-fit: cover;
    min-width: 100%;
    min-height: 100%;
  }
  @media ${({ theme }) => theme.breakpoints.mobile} {
    width: 182px;
    height: 182px;
  }
`;

export const Comments = styled.textarea`
  width: 100%;
  resize: vertical;
  min-height: 40px
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  padding: 10px 20px 8px 20px;
  overflow: visible;
  @media (min-width: 768px) {
    min-height: 113px;
    ::placeholder {
      font-family: 'Inter';
      font-weight: 400;
      font-size: 16px;
      line-height: 26px;
      color: #535353;
      padding-left: 10px;
    }
  }
`;
export const Star = styled.span`
  color: ${({ theme }) => theme.colors.accent};
`;
export const GlobalStyle = createGlobalStyle`
box-sizing: border-box;
margin: 0;
padding: 0;
font-family: 'Arial', sans-serif;
`;
