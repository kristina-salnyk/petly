import { NavLink } from 'react-router-dom';
import styled from 'styled-components';



export const UserLink = styled(NavLink)`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.04em;
    color: black;
    margin-left:10px;

    @media (min-width: 768px) {
        :hover{
         color:#FFFFFF;
         cursor: pointer;
         
    }
   
`

export const UserButton = styled.li`
    border-radius: 40px;
    border: 2px solid #F59256;
    color: #111111;
    padding: 5px 28px;
    text-align: center;
    text-decoration: none;
    display: inline-flex;
    font-size: 16px;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    text-decoration: none;
    margin-right: 20px;

    @media (min-width: 768px) {
        :hover{
        background: #F59256;
        cursor: pointer;
         
     }
`

