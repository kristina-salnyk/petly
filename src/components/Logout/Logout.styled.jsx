import styled from 'styled-components';

export const LogoutBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 15px;
  margin-left: 16px;
  padding: 4px 4px 4px 0;
  &:hover {
    background-color: #fdf7f2;
  }
`;

export const LogoutSpan = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: rgba(17, 17, 17, 0.6);
  margin-left: 4px;
`;
