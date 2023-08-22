import styled from "styled-components";
import { TiZoomOutline } from 'react-icons/ti';


export const Box = styled.div`
width: 300px;
height: 25px;
border-radius: 10px;
padding: 10px;
background-color: #F2F2F2;
flex-direction: row;
display: flex;
align-items: center;
gap: 10px;
`

export const TextBox = styled.p`
color: black;

`


export const MyBox = () => {
    return (
        <Box>
            <TiZoomOutline />
            <TextBox>
                What Pokémon are you looking for?
            </TextBox>
        </Box>
    )
}