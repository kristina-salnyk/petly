import styled from 'styled-components';
// import theme from '../../../utils/theme';

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  padding-left: 16px;
  padding-right: 16px;
`;

export const ButtonLearnMore = styled.button`
  width: 248px;
  height: 38px;
  background: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
  cursor: pointer;
`;

export const ButtonText = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: #f59256;
`;

export const ButtonDelete = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 248px;
  height: 38px;
  background: #ffffff;
  border: 2px solid #ff6101;
  border-radius: 40px;
  margin-top: 12px;
  color: #ff6101;
  cursor: pointer;
`;

export const ButtonTextDelete = styled.span`
  margin-right: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: #ff6101;
`;
