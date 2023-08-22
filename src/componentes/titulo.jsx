import styled from "styled-components";
import { GiBallPyramid } from 'react-icons/gi'
import { ImLink } from 'react-icons/im'
import { BiAbacus } from 'react-icons/bi'


export const Titulo = styled.div`
background-color: white;

`

export const TextTitulo = styled.p`
//styleName: Description;
font-family: SF Pro Display;
font-size: 16px;
font-weight: 400;
`
export const Icons = styled.div`
display: flex;
direction: rtl;
gap: 20px;
`

export const BoxTitulo = styled.h1`
font: SF Pro Display;
font-weight: 700;
size: 32px;
line-height: 38.19px;
color: #17171B;
`
export const Mytitulo = () => {
    return (
        <Titulo>
            <Icons>
                <BiAbacus />
                <ImLink />
                <GiBallPyramid />
            </Icons>
            <BoxTitulo>
                Pokédex
            </BoxTitulo>
            <TextTitulo>
                Search for Pokémon by name or using the National Pokédex number.
            </TextTitulo>
        </Titulo>

    )
}

