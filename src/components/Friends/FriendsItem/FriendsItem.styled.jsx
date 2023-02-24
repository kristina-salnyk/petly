import styled from 'styled-components';

export const SponsorLink = styled.a`
  margin-bottom: 16px;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  font-size: ${({ theme }) => theme.typography.size.xxxs};
  color: ${({ theme }) => theme.colors.accent};
  text-align: center;
  text-decoration-line: underline;

  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.hoverAccent};
  }
 @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
    font-size: ${({ theme }) => theme.typography.size.xs};
    margin-bottom: 20px;
    width: 300px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktopMin}) {
    font-size: ${({ theme }) => theme.typography.size.m};
    margin-bottom: 24px;
    width: 350px;
  }
`;

export const FriendCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const Time = styled.button`
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  font-size: ${({ theme }) => theme.typography.size.xxxs};
  line-height: 16px;
  display: flex;
  align-items: center;
  padding: 0;
  cursor: pointer;
  border: none;
  background-color: inherit;
  &.active {
    color: ${({ theme }) => theme.colors.hoverAccent};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${({ theme }) => theme.colors.hoverAccent};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
    font-size: ${({ theme }) => theme.typography.size.xxs};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktopMin}) {
    font-size: ${({ theme }) => theme.typography.size.xs};
  }
`;

export const Text = styled.p`
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  font-size: ${({ theme }) => theme.typography.size.xxxs};
  

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
    font-size: ${({ theme }) => theme.typography.size.xxs};
    
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktopMin}) {
    font-size: ${({ theme }) => theme.typography.size.xs};
  }
`;

export const TextWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 12px;
`;

export const AddresLink = styled.a`
  text-decoration-line: underline;
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  font-size: ${({ theme }) => theme.typography.size.xxxs};
  color: ${({ theme }) => theme.colors.text.primary};
  
  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.hoverAccent};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
    font-size: ${({ theme }) => theme.typography.size.xxs};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktopMin}) {
    font-size: ${({ theme }) => theme.typography.size.xs};
  }
`;


export const ContactLink = styled.a`
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  font-size: ${({ theme }) => theme.typography.size.xxxs};
  color: ${({ theme }) => theme.colors.text.primary};
  
  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.hoverAccent};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
    font-size: ${({ theme }) => theme.typography.size.xxs};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktopMin}) {
    font-size: ${({ theme }) => theme.typography.size.xs};
  }
`;

export const Img = styled.img`
  margin-right: 12px;
  max-width: 110px;
  max-height: 115px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
    max-width: 120px;
    margin-right: 14px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktopMin}) {
    max-width: 158px;
    margin-right: 16px;
  }
`;

export const SponsorItem = styled.li`
  display: flex;
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
  flex-basis: calc(100% / 1 - 40px);
  display: flex;
  justify-content: center;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}){
      flex-basis: calc(100% / 2 - 32px);
      margin: 15px;
    };

    @media (min-width: ${({ theme }) => theme.breakpoints.desktopMin}){
      flex-basis: calc(100% / 3 - 32px);
      margin: 16px;
    };
  
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
`;

export const TimeList = styled.ul`
  position: absolute;
  top: 25px;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  background-color: white;
  border: ${({ theme }) => theme.colors.accent} 2px solid;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: ${({ theme }) => theme.shape.borderRadius.s}px;
  padding: 12px;
  margin-bottom: -4px;
`;

export const TimeItem = styled.li`
  margin-bottom: 4px;
  width: 100px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
    width: 120px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktopMin}){
    width: 126px;
  }
`;

export const ItemWraper = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: ${({ theme }) => theme.shadows[0]};
  border-radius: ${({ theme }) => theme.shape.borderRadius.m}px;
  padding: 12px 4px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}){
    width: 336px;
    border-radius: ${({ theme }) => theme.shape.borderRadius.l}px;
    padding: 16px 4px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopMin}){
    width: 395px;
  }
`;