import styled from 'styled-components';
import { NavLink } from 'react-router-dom';



export const Ul = styled.ul`
  list-style: none;
  display: flex;
  gap:80px;
  white-space: nowrap;
  
  @media (max-width: 1279px) {
    display: none;
    margin:0;
    padding:0;
    
  }

    
`
export const Find = styled.li`
        margin: 0;
        padding: 0;
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 27px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;
`        

export const  News = styled.li`
        margin: 0;
        padding: 0;
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 27px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;
`
export const  Friends = styled.li`
        margin: 0;
        padding: 0;
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 27px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;
`
export const  StyledNews= styled(NavLink)`
  text-decoration: none;
  color: #000000;
`
export const  StyledFind = styled(NavLink)`
  text-decoration: none;
  color: #000000;
`
export const  StyledFriends = styled(NavLink)`
  text-decoration: none;
  color: #000000;
`