import styled from "styled-components";
import { COLORS, SIZES } from '../../assets/fonts'

export const Container = styled.div`
width: 100vw;
height: 100vh;

background-color: #fff;
`;

export const Circle = styled.div`
background-color: #000;

width: 100px;
height: 100px;
border-radius: 50px;
`;


export const ContainerTitle = styled.div`
width: 100%;

margin-top: 40px;

`;

export const ContainerAbsolute = styled.div`
width: 100%;

display: flex;
align-items: center;
justify-content: center;

`

export const Text = styled.h1`
color: #000;
font-size: 1.5rem;
padding-left: 22px;
font-family: 'Nunito', sans-serif;

`

export const SubText = styled.p`
font-size: 0.6rem;
font-weight: 400;
line-height: 1.1rem;
color: #000;
font-family: 'Nunito', sans-serif;
`

export const ContainerCenterSub = styled.div`

display: flex;
align-items: center;
justify-content: center;

`

export const ContainerImage = styled.div`
width: 100%;

`
export const Img = styled.img`
width: 100%;

`;

export const ContainerFooter = styled.div`
width: 100%;
margin-top: 5%;
display: flex;
align-items: center;
justify-content: center;
`;


export const ButtonFooter = styled.button`
width: 206px;
height: 3.3rem;
border-radius: 40px;
font-family: 'Nunito', sans-serif;
background-color: #000;
color: #fff;
`
export const LogoImg = styled.img`
width: 30%;

`;

export default styled;

