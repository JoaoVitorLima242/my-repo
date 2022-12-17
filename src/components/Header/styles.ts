import styled, { css } from "styled-components";
import { device } from "../../constants/size";

type TDropdownSection = {
    isOpen: boolean
} 

const dropdownModifiers = {
    isOpen: () => css`
        height: auto;
        bottom: 0;
        p {
            bottom: 0;
        }
    `
}

export const Wrapper = styled.div`
    background-color: #282a36;
    height: 78px;
    position: sticky;
    top: 0;
    z-index: 9999;
`

export const LogoContainer = styled.div`
    h1 {
        font-family: 'Lobster Two', cursive;
        color: white;
        text-shadow: 4px 2px 0 #6272a4;
        font-weight: 900;
        margin-left: 10px;
    }

    @media ${device.tablet} {
        h1 {
            display: none;
        }

        div {
            display: block;
        }
    }
`

export const Logo = styled.div`
    display: none;

    @media ${device.tablet} {
        div {
            display: block;
        }
    }

`


export const TopSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: 0 40px;
    z-index: 100;
    background-color: #282a36;
    position: relative;
`

export const Navlinks = styled.ul`
    display: flex;

    li { 
        list-style-type: none;
        padding: 0 20px;
        font-size: 22px;
        font-family: 'Montserrat', sans-serif;
        color: #bd93f9;
    }

    @media ${device.tablet} {
        display: none;
    }
`

export const HamburgerIcon = styled.button`
    display: none;
    background: transparent;
    border: none;
    width: 40px;

    div {
        height: 5px;
        background: #fff;
        margin: 6px 0;
        border-radius: 10px;
    }

    @media ${device.tablet} {
        display: block;
    }
`

export const DropdownSection = styled.div<TDropdownSection>`
    ${({ isOpen }) => css`
        background-color: #282a36;
        transition: all 0.2s; 
        position: relative;
        z-index: 1;
        bottom: 0;
        border-radius: 0 0 10px 10px;
        overflow: hidden;
        padding-bottom: 10px;
        bottom: 200px;

        p {
            margin: 0 auto;
            color: #fff;
            text-align: center;
            font-size: 20px;
            padding: 10px 0;
            bottom: 200px;
        }

        ${isOpen && dropdownModifiers.isOpen}
    `}
`
