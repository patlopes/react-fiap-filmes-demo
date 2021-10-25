import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    backgroud-color: ${({theme}) => theme.color.background};
`;
export const PosterHeader = styled.Image`
    width: 500px;
    height: 250px;
    opacity: 0.7;
`;

export const TituloDestaque = styled.Text`
    color: #FFF;
    fint-size: 35px;
    text-aling: center;
    text-transform: uppercase;
    top: -50px
`;

export const BotaoDestaque = styled.Touchable`
    aling-item:center;
    backgroud-color: ${({theme}) => theme.color.primary};
    border-radios: 5px;
    width: 250px;
    padding: 8px;
    
`;