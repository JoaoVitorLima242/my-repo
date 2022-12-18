import styled, { css } from "styled-components";
import { device } from "../../constants/size";

type TWrapper = {
    type: 'success' | 'error'
}

const wrapperModifiers = {
    error: () => css`
        border: solid #FA3742 1px;
        box-shadow: 0 0 10px 1px #FA374220;
        color: #FA3742;
    `,
    success: () => css`
        border: solid #50fa7b 1px;
        box-shadow: 0 0 10px 1px #50fa7b20;
        color: #50fa7b;
    `
}

export const Wrapper = styled.div<TWrapper>`
    ${({ type }) => css`
        position: relative;
        display: flex;
        align-items: center;
        padding: 0px 20px;
        font-weight: bold;
        font-size: 1.2rem;
        margin: 10px 0;

        p {
            margin: 0;
        }

        @media ${device.tablet} {
            font-size: 1rem;
            padding: 10px 20px;
        }
        
        ${type && wrapperModifiers[type]}
    `}
`

export const Icon = styled.div`
    position: relative;
    font-size: 30px;
    margin-right: 10px;
    margin-bottom: 10px;
`