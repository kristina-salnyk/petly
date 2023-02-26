import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing[5]}px;
  font-size: ${({ theme }) => theme.typography.size.l};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
    font-size: ${({ theme }) => theme.typography.size.xxl};
  }
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.typography.size.xs};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
    font-size: ${({ theme }) => theme.typography.size.m};
  }
`;

export const Image = styled.img`
  max-width: 200px;
  display: block;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet[0]}) {
    max-width: 250px;
  }
`;
