import React from "react";
import { Container, PosterHeader, TituloDestaque, BotaoDestaque } from './styles'

export default function Home(){
    return (
        <Container>
            <PosterHeader source={{uri: ''}}/>
            <TituloDestaque>Fundação</TituloDestaque>
            <BotaoDestaque>
                <LabelBotao>Detalhes</LabelBotao>
            </BotaoDestaque>
        </Container>
    
    )}