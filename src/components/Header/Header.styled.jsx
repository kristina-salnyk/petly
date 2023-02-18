import styled from 'styled-components';


export const UL = styled.ul`
margin: 0;
padding-left: 20px;
padding-right: 20px;
list-style: none;
display: flex;
padding-top: 16px;

@media (min-width: 1280px) {
    margin: 0;
    padding: 0;
    padding-top: 30px;
    padding-left: 20px;
    display: flex;
}



       
`
export const Waves = styled.img`
    position: absolute;
    width: 320px;
    left: 0;
    top: 165px;
    z-index: -1;

    @media (min-width: 768px) {
        width: 806px;
        left: 0;
        top: 248px;
    }
    
`  
export const IMG = styled.img `
    width: 325px;
    height: 500px;
    padding-top: 20px;

  @media (min-width: 768px)  {
    width: 800px;
    height: 1124px;

    position: absolute;
    left: 0px;
    top: 401px;
    
 }
 @media (min-width: 1280px)  {
    width: 590px;
    height: 640px;
    left: 674px;
    top: 128px;
    
 }
`
export const H1 = styled.h1` 

    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    color: #000000;
    padding-left: 20px;
    -bottom: 58px;

    @media (min-width: 768px) and (max-width: 1280px) {
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 700;
        font-size: 68px;
        line-height: 100px;
        padding-left: 33px;
    }
`  


export const Page = styled.div`
    padding-top: 20px;
    
`

export const Сontainer = styled.div`
    margin: 0;
    padding: 0;
    
`
