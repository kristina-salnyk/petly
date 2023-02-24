import styled from 'styled-components';

export const ImageThumb = styled.div`
position: relative;
  width: 280px;
  height: 288px;
  background-color: ${props => props.theme.colors.white};

  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const ImageCard = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const InfoWrapper = styled.div`
position: absolute;
top: 0;
left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  width: 100%;
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
  transition: transform ${props => props.theme.animation.cubicBezier};
  &:hover {
    transform: scale(1.07) rotateX(0deg) translateZ(25px);
   
  }
  &:hover > svg {
    fill: ${props => props.theme.colors.accent};
  }
`;

export const LabelText = styled.span`
  font-family: ${props => props.theme.typography.font.primary};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.black};
`;
