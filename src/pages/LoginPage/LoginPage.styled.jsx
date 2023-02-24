import styled from 'styled-components';

import dsctpImageLoginBg from '../../images/AuthPages/loginReg-bg-d@1x.png';
import dsctpImageLoginBg2x from '../../images/AuthPages/loginReg-bg-d@2x.png';

import tbltImageLoginBg from '../../images/AuthPages/loginReg-bg-t@1x.png';
import tbltImageLoginBg2x from '../../images/AuthPages/loginReg-bg-t@2x.png';

import mblImageLoginBg from '../../images/AuthPages/loginReg-bg-m@1x.png';
import mblImageLoginBg2x from '../../images/AuthPages/loginReg-bg-m@2x.png';

export const Container = styled.div`
  padding: 0 40px;
  margin: 0 auto;

  @media screen and (min-width: 320px) {
    width: 320px;
    padding-top: 60px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 90px 32px 0 32px;
  }
  @media screen and (min-width: 1281px) {
    width: 1280px;
    padding: 100px 16px 0 16px;
  }
`;

export const Main = styled.main`
  height: 100vh;
  flex: 1 0 auto;
  background-image: url(${mblImageLoginBg});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100% auto;
  @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
    background-image: url(${mblImageLoginBg2x});
  }
  @media (min-width: 768px) {
    background-image: url(${tbltImageLoginBg});
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: 100% auto;
    @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
      background-image: url(${tbltImageLoginBg2x});
    }
  }
  @media (min-width: 1280px) {
    background-image: url(${dsctpImageLoginBg});
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: 100% auto;
    @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
      background-image: url(${dsctpImageLoginBg2x});
    }
  }
`;

export const BackgroundContainer = styled.div`
  @media (min-width: 768px) {
    width: 608px;
    height: 100%;
    padding-left: 80px;
    padding-right: 80px;
    padding-top: 60px;
    padding-bottom: 40px;
    background: #ffffff;
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 40px;
    margin: 0 auto;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  margin-bottom: 40px;
  @media (min-width: 480px) {
    font-size: 36px;
  }
`;
