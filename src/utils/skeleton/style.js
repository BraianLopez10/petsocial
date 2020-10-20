import styled, { css, keyframes } from 'styled-components'

export const Wrapper = styled.div`
    display:flex;
    width:100%;
    padding:10px;
    &::-webkit-scrollbar{
        display:none;
    }
`

export const Anchor = styled.a`
    display:flex;
    flex-direction:column;
    text-align:center;
    align-items:center;
    text-decoration:none;
    width:75px;
    margin-right:10px;
`
export const Label = styled.label`
    margin-top:10px;
    background-color:#dddd !important;
    height:20px;
    width:60px;

`
const skeletonLoading = keyframes`
    from {
        background-position: 0% 0%;
    }
    to {
        background-position: -135% 0%;
    }
`
export const Image = styled.div`
    border:1px solid #ddd;
    box-shadow: 0px 10px 14px rgba(0,0,0,.2);
    border-radius:50%;
    height:auto;
    overflow:hidden;
    object-fit:cover;
    width:75px;
    height:75px;
    background: linear-gradient(-90deg, #F0F0F0 0%, #F8F8F8 50%, #F0F0F0 100%);
    background-size: 400% 400%;
    animation: ${skeletonLoading} 1.2s ease-in-out infinite;
`

export const Items = styled.div`
    padding: 0 8px;
    display:flex;
`
