import styled from 'styled-components';
// import theme from '../../../utils/theme';


export const ImageCard = styled.div`
  width: 280px;
  height: 288px;
  background-color: #F59256;

  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
`;

export const CategoryLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 158px;
  height: 28px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
`;

export const FavoriteLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  border-radius: 50%;
  margin-right: 15px;
  cursor: pointer;
`;

export const LabelText = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
`;