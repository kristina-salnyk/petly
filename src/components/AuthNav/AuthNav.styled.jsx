import styled from 'styled-components';

export const Div = styled.div`
  
 @media (max-width: 768px) {
  display: none;
    

  } 
 
    
`

export const Auth = styled.ul`
  
 @media (min-width: 768px) {
   
    display: flex;
    margin-left: 250px;
  } 
  
    
`

export const Login = styled.li`
    border-radius: 40px;
    border: 2px solid #F59256;
    background: #FDF7F2;
    color: #111111;
    padding: 8px 28px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;

    @media (min-width: 768px) {
       :hover{
        color:#FFFFFF;
        background-color: #F59256;
      }

        
        margin-right: 12px;

        font-family: 'Manrope';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 27px;
        etter-spacing: 0.04em;
    } 

    
`

export const Register = styled.li`
    border-radius: 40px;
    border: 2px solid #F59256;
    color: #111111;
    padding: 8px 28px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;

    @media (min-width: 768px) {
      :hover{
       color:#FFFFFF;
       background-color: #F59256;
     }

       
       margin-right: 12px;

       font-family: 'Manrope';
       font-style: normal;
       font-weight: 500;
       font-size: 20px;
       line-height: 27px;
       etter-spacing: 0.04em;
   } 
 
`