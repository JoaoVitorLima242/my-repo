import styled, { css } from "styled-components"
import { device } from "../../constants/size"

type TWrapper = {
    isOpen: boolean
}

const wrapperModifiers = {
    isOpen: () => css`
      display: block;
      opacity: 1;
    `
}

export const Wrapper = styled.div.attrs(() => ({
    className: 'modal'
  }))<TWrapper>`
    ${({ isOpen }) => css`
        --bs-modal-width: 800px;
        ${isOpen && wrapperModifiers.isOpen()};
    `}
`
  
export const Overlay = styled.div`
    position: absolute;
    background-color: #00000035;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 10;
`
  
export const ModalDialog = styled.div.attrs(() => ({
    className: 'modal-dialog'
}))`
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 0 0;
    z-index: 20;
`
  
export const ModalContent = styled.div.attrs(() => ({
    className: 'modal-content'
}))`
    background: #FFFFFF;
    border-radius: 8px;
    border: none;
    padding: 18px 30px 30px;
    width: 100%;
    position: relative;
    z-index: 999;
    margin: 0 14px;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;

    @media ${device.tablet} {
        height: 300px;
    }
    @media ${device.mobile} {
        height: 200px;

    }
`