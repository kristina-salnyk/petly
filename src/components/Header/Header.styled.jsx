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
    width: 108%;
    left: 0;
    top: 203px;
    z-index: -1;

    @media (min-width: 768px) {
        width: 100%;
        left: 0;
        top: 248px;
    }
    @media screen and (min-width: 1280px) {
        display: none;
    }
    
`  
export const IMG = styled.img `
    width: 355px;
    height: 515px;
    left: 0px;
    top: 262px;
    position: absolute;
    

  @media (min-width: 768px)  {
    width: 800px;
    height: 1124px;

    position: absolute;
    left: 0px;
    top: 401px;
    
 }
 @media (min-width: 1280px)  {
    width: 750px;
    height: 862px;
    left: 638px;
    top: 171px;
    
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

    @media (min-width: 768px) {
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 700;
        font-size: 68px;
        line-height: 100px;
        padding-left: 20px;
    }
`  


export const Page = styled.div`
    padding-top: 60px;
    @media screen and (min-width: 768px) {
        display: flex;
        padding-top: 90px;
    }

    @media screen and (min-width: 1280px) {
        display: flex;
        padding-top: 103px;
    }

    
`

export const Сontainer = styled.div`
    margin: 0;
    padding: 0;
    
`
export const WavesDesk = styled.img`
        position: absolute;
        width: 1338px;
        height: 700px;
        left: 30px;
        top: 295px;
        z-index: -1;
@media screen and (max-width: 1279px) {
    display: none;
    
}
@media screen and (min-width: 1280px) {
    position: absolute;
    width: 1378px;
    height: 701px;
    left: 16px;
    top: 296px;
    z-index: -1;
    
}
      
`  
export const Union = styled.img`
    position: absolute;
    right: 579px;
    top: 295px;

@media screen and (max-width: 1279px) {
    display: none;
    
}
      
` 
export const Wrapper = styled.div`

  display: flex;
  align-items: center;
  gap: 80px;
` 
export const HederWrapper = styled.div`
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0;
  padding: 0;
  padding-top: 16px;
  padding-left: 20px;
  padding-right: 20px;
` 