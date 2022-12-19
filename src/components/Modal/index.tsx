import * as S from './styles'
import { ReactNode } from 'react'

export type ModalProps = {
  isOpen: boolean;
  children: ReactNode
  modalHandler: () => void
  withCustomBackground?: boolean
}




const Modal = ({ children, isOpen,  modalHandler,  withCustomBackground }: ModalProps) => {
  return (
    <S.Wrapper
      isOpen={isOpen}
      width={600}
    >
      <S.Overlay
        onClick={modalHandler}
      />
      <S.ModalDialog>
        <S.ModalContent>
          {children}
        </S.ModalContent>
      </S.ModalDialog>
    </S.Wrapper>
  )
}

export default Modal