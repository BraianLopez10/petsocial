import styled from 'styled-components'
import { fadein } from '../../styles/animation'

export const Article = styled.article`
    min-height:300px;
`
export const WrapperImage = styled.div`
    ${fadein()}
    display:block;
    height:0;
    overflow:hidden;
    height:auto;
    margin:5px;
    border-radius:10px;

`

export const Img = styled.img`
    ${fadein({ time: '1s', type: 'ease' })};
    box-shadow: 0 10px 14px rgba(0,0,0,0.2);
    height:100%;
    object-fit:cover;
    width:100%;

`
export const Button = styled.button`
    display:flex;
    align-items:center;
    padding-top: 0 8px;
    & svg {
        margin-right:4px
    }
`
