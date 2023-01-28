import {
    Container,
    Circle,
    ContainerTitle,
    Text,
    SubText,
    ContainerCenterSub,
    ContainerImage,
    Img,
    ContainerFooter,
    ButtonFooter,
    ContainerAbsolute,
    LogoImg,
} from "./style";

import Logo from "../../assets/images/logo.svg";
import People from "../../assets/images/people.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    function navigateToSignin() {
        navigate("signin");
    }
    return (
        <Container>
            <ContainerAbsolute>
                <LogoImg src={Logo} />
            </ContainerAbsolute>
            <ContainerTitle>
                <Text>Divida suas</Text>
                <Text>Despesas com seus</Text>
                <Text>amigos de maneria simples</Text>
                <ContainerCenterSub>
                    <SubText>
                        Sabe quando você precisa dividir as contas com seus
                        amigos? Deixa conosco
                    </SubText>
                </ContainerCenterSub>
            </ContainerTitle>
            <ContainerImage>
                <Img src={People} />
            </ContainerImage>
            <ContainerFooter>
                <ButtonFooter onClick={navigateToSignin}>Começar</ButtonFooter>
            </ContainerFooter>
        </Container>
    );
}
