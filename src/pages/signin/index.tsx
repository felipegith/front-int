import {
    Container,
    Header,
    Text,
    SubText,
    ContainerLogo,
    ImgLogo,
    Form,
    TextInput,
    ContainerInput,
    Input,
    ContainerSignup,
    ContainerLabel,
    ContainerInputSignin,
    InputSubmit,
    TextLink,
    InputSignin,
} from "./styles";
import { useState } from "react";
import Logo from "../../assets/images/logo.svg";
import api from "../../services/api";

export default function Signin() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    async function handleSignin(e: React.SyntheticEvent) {
        e.preventDefault();
        const data = {
            username,
            password,
        };

        await api
            .post("user/v1/signin", data)
            .then((response) => {
                setUsername("");
                setPassword("");
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <Container>
            <Header>
                <Text>Seja bem vindo de volta!</Text>
                <SubText>
                    Faça sua autenticação na plataforma para desfrutar das
                    nossas facilidades
                </SubText>
            </Header>
            <ContainerLogo>
                <ImgLogo src={Logo} />
            </ContainerLogo>
            <Form onSubmit={handleSignin}>
                <ContainerInput>
                    <ContainerLabel>
                        <TextInput>Usuário</TextInput>
                    </ContainerLabel>
                    <InputSignin
                        type="text"
                        placeholder="Joao995"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </ContainerInput>

                <ContainerInput>
                    <ContainerLabel>
                        <TextInput>Senha</TextInput>
                    </ContainerLabel>
                    <InputSignin
                        type="password"
                        placeholder="*******"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </ContainerInput>
                <ContainerSignup>
                    <SubText>
                        Não possui uma conta? <TextLink>Clique aqui</TextLink>
                    </SubText>
                </ContainerSignup>
                <ContainerInputSignin>
                    <InputSubmit value="Entrar" type="submit" />
                </ContainerInputSignin>
            </Form>
        </Container>
    );
}
