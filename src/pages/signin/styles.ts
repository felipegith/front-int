import styled from 'styled-components'


export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    background-color: #FFF
`;

export const Header = styled.header`
    width: 100%;
    margin-top: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Text = styled.h1`
    font-size: 1.5rem;
    font-family: 'Nunito', sans-serif;
`;

export const SubText = styled.p`
    font-size: 0.6rem;
    font-family: 'Nunito', sans-serif;
    color: #000;
`;

export const ContainerLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 10%;

`

export const ImgLogo = styled.img`
    width: 30%;

`
export const Form = styled.form`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
`
export const TextInput = styled.h1`
    font-size: 12px;
    
    font-family: 'Nunito';
`;

export const ContainerInput = styled.div`
    width: 100%;
    margin-top: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Input = styled.input`
    width: 70%;
    height: 50px;
    border: 1px solid #000;
    border-radius: 10px;

    text-align: center;
    font-size: 0.6rem;
`;

export const InputSignin = styled.input`
    width: 70%;
    height: 50px;
    border: 1px solid #000;
    border-radius: 10px;

    text-align: center;
    font-size: 0.6rem;
`;


export const ContainerSignup = styled.div`
    width: 70%;
    margin-bottom: 28px;
    display: flex;
    justify-content: flex-end;
    
`;

export const ContainerLabel = styled.div`
    width: 70%;
`;

export const ContainerInputSignin = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

export const InputSubmit = styled.input`
    width: 50%;
    height: 42px;
    border-radius: 40px;

    border: 1px solid #000;
    background-color: #000;
    color: #fff;

    font-family: 'Nunito', sans-serif;

    text-align: center;
`

export const TextLink = styled.a`
    text-decoration: none;
    color: #000;
    font-weight: bold;
    font-family: 'Nunito'
`
export default styled;