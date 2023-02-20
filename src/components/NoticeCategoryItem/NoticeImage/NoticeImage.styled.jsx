import styled from 'styled-components';

export const ImageCard = styled.div`
  width: 280px;
  height: 288px;
  background-color: ${props => props.theme.colors.accent};

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
  background: ${props => props.theme.colors.light};
  backdrop-filter: blur(2px);
  cursor: default;
  border-radius: 0px 40px 40px 0px;
`;

export const FavoriteLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: ${props => props.theme.colors.light};
  backdrop-filter: blur(2px);
  border-radius: 50%;
  margin-right: 15px;
  cursor: pointer;
`;

export const LabelText = styled.span`
  font-family: ${props => props.theme.typography.font.primary};
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.black}
`;
