import styled from "styled-components";
import { FaFire } from 'react-icons/fa'
import img from '../assets/img/04.png'

export const Chamander = styled.div`
width: 334px;
height: 115px;
border-radius: 10px;
padding: 15px;
background-color: orange;
flex-direction: row;
display: flex;
align-items: center;
justify-content: space-between;
`
export const FireChamander = styled.div`
width: 73px;
height: 25px;
border-radius: 3px;
padding: 5px;
background-color: #FD7D24;
color: white;
justify-content: space-between;
display: flex;
align-items: center;
`

export const TextChamander = styled.p`
color: black;
size: 12px;
height: 14.32px;
`
export const NChamander = styled.p`
color: white;
line-height: 31px;
font-weight: 700;
`
export const TypeRow = styled.div`
display: flex;

`
export const ColChamander = styled.div`

`
export const ImgChamander = styled.img`
width: 130px;
height: 130px;
`

export const MyCharmander = () => {
    return (
        <Chamander>
            <ColChamander>
                <TextChamander>
                    #004
                </TextChamander>
                <NChamander>
                    Chamander
                </NChamander>
                <TypeRow>
                    <FireChamander>
                        <FaFire />
                       <p>Fire</p>
                    </FireChamander>
                </TypeRow>
            </ColChamander>
            <ImgChamander src={img}/>
        </Chamander>
        
    )
}