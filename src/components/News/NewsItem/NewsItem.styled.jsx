import styled from 'styled-components';

export const CardNews = styled.div`
  width: 280px;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}){
    width: 335px;
  };

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopMin}){
    width: 390px;
  };
`;

export const TopLineCard = styled.div`
  width: 200px;
  height: ${({ theme }) => theme.spacing[0]}px;
  margin-bottom: 4px;
  border-radius: ${({ theme }) => theme.shape.borderRadius.l}px;
  background:${({ theme }) => theme.colors.background.gradient};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}){
    width: 280px;
  };

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopMin}){
    width: 340px;
  };
`;

export const TitleItemNews = styled.h3`
  padding-top: ${({ theme }) => theme.spacing[1]}px;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  ${({ theme }) => theme.typography.size.l};
  color: ${({ theme }) => theme.colors.text.primary};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const FooterItemNews = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing[9]}px;
`;

export const DescriptionItemNews = styled.p`
  margin-top: ${({ theme }) => theme.spacing[4]}px;
  font-weight: ${({ theme }) => theme.typography.weight.regular};
  font-size: ${({ theme }) => theme.typography.size.xs};
  color: ${({ theme }) => theme.colors.text.primary};
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const DateItemNews = styled.p`
  ${({ theme }) => theme.typography.weight.regular};
  font-size: ${({ theme }) => theme.typography.size.xs};
  line-height: 22px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const ItemNewsLink = styled.a`
  font-weight: ${({ theme }) => theme.typography.weight.semiBold};
  font-size: ${({ theme }) => theme.typography.size.xs};
  color: ${({ theme }) => theme.colors.accent};
  text-decoration-line: underline;
  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.hoverAccent};
  }
`;