import styled, { css } from "styled-components"

type TWrapper = {
    isOpen: boolean
    width: number
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
    ${({ isOpen, width }) => css`
        --bs-modal-width: ${!!width && `${width}px`};
        
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
    padding: 80px 0;
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
`
  
export const ModalHeader = styled.div.attrs(() => ({
    className: 'modal-header'
}))`
    border: none
`
  
export const CloseButton = styled.button`
    width: 30px;
    height: 30px;
    position: relative;
    border: none;
    background-color: transparent;
    margin-left: auto;

    :hover {
    opacity: 0.8;
    transition: ease-in-out 50ms all;
    }
`
  
  