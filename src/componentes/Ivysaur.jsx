import styled from "styled-components";

import img from '../assets/img/02.png'
import icon from '../assets/img/6.png'
import icon1 from '../assets/img/6.1.png'

export const Ivysaur = styled.div`
width: 334px;
height: 115px;
border-radius: 10px;
padding: 15px;
background-color: #8bd674;
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: row;
`
export const GrassIvysaur = styled.div`
width: 73px;
height: 25px;
border-radius: 3px;
padding: 5px;
background-color: gray;
color: white;
justify-content: space-between;
display: flex;
align-items: center;
`
export const PoisonIvysaur = styled.div`
width: 73px;
height: 25px;
border-radius: 3px;
padding: 5px;
background-color: #8571be;
color: white;
justify-content: space-between;
display: flex;
align-items: center;
`

export const TypeRow = styled.div`
display: flex;
gap: 20px;
`

export const TextIvysaur = styled.p`
color: black;
size: 12px;
height: 14.32px;
`
export const NIvysaur = styled.p`
color: white;
size: 26px;
line-height: 31px;
font-weight: 700;
`
export const ImgIvysaur = styled.img`
width: 130px;
height: 130px;
`

export const ColUIvysaur = styled.div`

`
export const IconGrass = styled.img`
width: 15px;
height: 15px;
color: white;
`

export  const IconPoison = styled.img`
width: 15px;
height: 15px;
`

export const MyIvysaur = () => {
    return (
        <Ivysaur>
            <ColUIvysaur>
                <TextIvysaur>
                    #002
                </TextIvysaur>
                <NIvysaur>
                    Ivysaur
                </NIvysaur>
                <TypeRow>
                    <GrassIvysaur>
                        <IconGrass src={icon} />
                     <p>   Grass</p>
                    </GrassIvysaur>
                    <PoisonIvysaur>
                      <IconPoison src={icon1} />
                      <p>  Poison</p>
                    </PoisonIvysaur>
                </TypeRow>
            </ColUIvysaur>
            <ImgIvysaur src={img} />
        </Ivysaur>
    )
}