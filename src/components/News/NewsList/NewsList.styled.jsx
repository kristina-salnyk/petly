import styled from 'styled-components';

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;      
  align-items: center;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 66px;  
  
`;

export const ListNews = styled.ul`
    display: flex;
    flex-wrap: wrap;
    
    margin-top: 60px; 
    list-style: none;  
`;

export const ItemNews = styled.li`
    
    flex-basis: calc(100% / 3 - 30px);
    margin-left: 30px;
    margin-bottom: 60px;
`;

export const ConteinerNews = styled.div`
    margin-top: 40px;
`;

// export const ErrorTitle = styled.h2`
//     position: relative;
//     margin: 0px auto;
//     width: 515px;
//     height: 100%;
// `;

export const SearchNewsForm = styled.form`
  position: relative;
  margin: 0px auto;
  width: 608px;
  height: 44px;
  border-radius: 44px;
  background-color: white;
  border: none;
  outline: none;
`;


export const SearchNewsInput = styled.input`
  display: inline-block;
  width: 608px;
  height: 100%;
  padding: 8px 52px 8px 20px;
  border-radius: 44px;
  background-color: white;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border: none;
  outline: none;
  font-size: 16px;
  line-height: 0.75;
  letter-spacing: 0.04em;
  font-size: 20px;
  
  &:focus {
    outline-color: white;
  }
  ::placeholder {
    font-family: 'Inter';
    font-weight: 500;
    font-size: 20px;
    line-height: 1.2;
    color: #535353;
    
    }
`;

export const SearchNewsButton = styled.button`
  position: absolute;
  top: 8px;
  right: 20px;
  width: 32px;
  height: 35px;
  border-radius: 32px;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  fill: black;
  :hover {
    fill: orange;
  }
`;