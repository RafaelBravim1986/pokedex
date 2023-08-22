import styled from "styled-components";
import img from '../assets/img/01.png'
import icon from '../assets/img/6.png'
import icon1 from '../assets/img/6.1.png'




export const Bulbasaur = styled.div`
width: 334px;
height: 115px;
border-radius: 10px;
padding: 15px;
background-color: #8bd674;
display: flex;
align-items: center;
justify-content: space-between;
`
export const GrassBulbasaur = styled.div`
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

export const PoisonBulbasaur = styled.div`
width: 73px;
height: 25px;
padding: 5px;
background-color: #8571be;
color: white;
justify-content: space-between;
display: flex;
`
export const TypeRow = styled.div`
display: flex;
gap: 20px;
`


export const TextBulbasaur = styled.p`
color: #17171B;
size: 12px;
height: 14.32px;
`

export const NBulbasaur = styled.p`
color: white;
size: 26px;
line-height: 31.03px;
font-weight: 700;
`

export const ImgBulbasaur = styled.img`
width: 130px;
height: 130px;
`
export const ColBulbasaur = styled.div`
`
export const IconGrass = styled.img`
width: 15px;
height: 15px;
`

export const IconPoison = styled.img`
width: 15px;
height: 15px;
`

export const MyBulbasaur = () => {
    return (
        <Bulbasaur>
            <ColBulbasaur>
                <TextBulbasaur>
                    {'#001'}
                </TextBulbasaur>
                <NBulbasaur>
                    Bulbasaur
                </NBulbasaur>
                <TypeRow>
                    <GrassBulbasaur>
                        <IconGrass src={icon} />
                        <p> Grass</p>
                    </GrassBulbasaur>
                    <PoisonBulbasaur>
                        <IconPoison src={icon1} />
                        Poison
                    </PoisonBulbasaur>
                </TypeRow>
            </ColBulbasaur>
            <ImgBulbasaur src={img} />
        </Bulbasaur>
    )
}