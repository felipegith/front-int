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
} from "../signin/styles";

import Logo from "../../assets/images/logo.svg";
import React, { useState } from "react";
import api from "../../services/api";

export default function Signup() {
    const [email, setEmail] = useState<string>();
    const [username, setUserName] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [loading, setLoading] = useState<boolean>(false);

    async function handleSignup(e: React.SyntheticEvent) {
        setLoading(true);
        e.preventDefault();
        const data = {
            username,
            password,
            email,
        };

        api.post("user/v1/signup", data)
            .then((response) => {
                response.status ? "Conta criada" : "deu ruim";
                setEmail("");
                setUserName("");
                setPassword("");
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (
        <Container>
            <Header>
                <Text>Olá! Seja muito bem vindo</Text>
                <SubText>
                    Crie sua conta para desfrutar dos beneficios da nossa
                    plataforma
                </SubText>
            </Header>
            <ContainerLogo>
                <ImgLogo src={Logo} />
            </ContainerLogo>
            <Form onSubmit={handleSignup}>
                <ContainerInput>
                    <ContainerLabel>
                        <TextInput>Usuário</TextInput>
                    </ContainerLabel>
                    <Input
                        type="text"
                        placeholder="Joao995"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </ContainerInput>

                <ContainerInput>
                    <ContainerLabel>
                        <TextInput>Email</TextInput>
                    </ContainerLabel>
                    <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Joao995@mail.com"
                    />
                </ContainerInput>

                <ContainerInput>
                    <ContainerLabel>
                        <TextInput>Senha</TextInput>
                    </ContainerLabel>
                    <Input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="*******"
                    />
                </ContainerInput>
                <ContainerSignup>
                    <SubText>
                        Já tem uma conta? <TextLink>Clique aqui</TextLink>
                    </SubText>
                </ContainerSignup>
                <ContainerInputSignin>
                    <InputSubmit value="Cadastrar" type="submit" />
                </ContainerInputSignin>
            </Form>
        </Container>
    );
}
