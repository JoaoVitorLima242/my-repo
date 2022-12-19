import Image from 'next/image';
import * as S from './styles'

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void
  image?: string
}




const Modal = ({ isOpen,  onClose, image = '' }: ModalProps) => {
  return (
    <S.Wrapper
      isOpen={isOpen}
    >
      <S.Overlay
        onClick={onClose}
      />
      <S.ModalDialog>
        <S.ModalContent>
          <Image 
            layout='fill'
            src={image || '/img/logo.png'}
            alt='Portifolio project image'
          />
        </S.ModalContent>
      </S.ModalDialog>
    </S.Wrapper>
  )
}

export default Modal