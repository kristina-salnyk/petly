import styled from 'styled-components';


export const Frame = styled.img`
position: absolute;
right: 0;
bottom:0;
z-index:-15;
@media (max-width: 1280px) {
	display:none;
}
`
export const ImageHeart = styled.img`
position: absolute;
right: 460px;
bottom:509px;
object-fit: cover;
@media (max-width: 1279px) {
	display:none;
}
`
export const ImageWrapper = styled.div`
`

export const ImageWoman = styled.img`
position: absolute;
bottom:0;
right:0;
z-index:-10;

@media (max-width: 767px){
	max-width:100%;
	right:50%;
	transform: translateX(50%);
}
@media (min-width: 767px) and (max-width: 1279px){
	max-width:100%;
	
	right:50%;
	transform: translateX(50%);
}
`


export const ImageBG = styled.img`
position:absolute;
width: 100%;
left:0;
bottom:0;
z-index:-20;
@media (max-width: 759px){
max-height: 100%;
min-height: 500px;
bottom:0px;
}
@media (min-width: 761px) and (max-width: 1280px) {
	bottom:0;
	
	max-height: 1080px;
 }

`