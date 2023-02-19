import styled from 'styled-components';

export const InfoList = styled.ul`
  margin-top: 15px;
  padding-left: 16px;
  display: flex;
  flex-direction: column;
`;

export const InfoItem = styled.li`
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const InfoLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space between;
`;

export const InfoInput = styled.input`
  box-sizing: border-box;
  width: 216px;
  height: 32px;
  padding-left: 12px;
  background: #fff;
  border: 1px solid black;
  // border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;

  &:focus {
    background: #fdf7f2;
    border: 1px solid rgba(245, 146, 86, 0.5);
    outline: none;
  }
`;

export const InfoBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 32px;
  height: 32px;
  background: #fdf7f2;
  border: none;
  border-radius: 50%;
  backdrop-filter: blur(2px);
  margin-right: 16px;
  margin-left: 24px;
`;
