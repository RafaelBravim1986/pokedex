import styled from "styled-components";
import icon from '../assets/img/6.png'
import icon1 from '../assets/img/6.1.png'
import img from '../assets/img/03.png'

export const Venusaur = styled.div`
width: 334px;
height: 115px;
border-radius: 10px;
padding: 15px;
background-color: #8bd674;
flex-direction: row;
display: flex;
align-items: center;
justify-content: space-between;
`
export const GrassVenusaur = styled.div`
width: 73px;
height: 25px;
border-radius: 3px;
padding: 5px;
background-color: #62b957;
color: white;
justify-content: space-between;
display: flex;
align-items: center;
`
export const PoisonVenusaur = styled.div`
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

export const TextVenusaur = styled.p`
color: black;
size: 12px;
height: 14.32px;
`
export const NVenusaur = styled.p`
color: white;
size: 26px;
line-height: 31px;
font-weight: 700;
`
export const ColVenusaur = styled.div`

`
export const ImgVenusaur = styled.img`
width: 130px;
height: 130px;
`
export const IconGrass = styled.img`
width: 15px;
height: 15px;
`

export const IconPoison = styled.img`
width: 15px;
height: 15px;
`

export const MyVenusaur = () => {
    return (
        <Venusaur>
            <ColVenusaur>
                <TextVenusaur>
                    #003
                </TextVenusaur>
                <NVenusaur>
                    Venusaur
                </NVenusaur>
                <TypeRow>
                    <GrassVenusaur>
                        <IconGrass src={icon} />
                        <p> Grass</p>
                    </GrassVenusaur>
                    <PoisonVenusaur>
                        <IconPoison src={icon1} />
                        <p>Poison</p>
                    </PoisonVenusaur>
                </TypeRow>
            </ColVenusaur>
            <ImgVenusaur src={img} />
        </Venusaur>
    )
}
