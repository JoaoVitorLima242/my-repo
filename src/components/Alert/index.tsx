import { MdErrorOutline, MdOutlineCheckCircleOutline} from 'react-icons/md'

import * as S from './styles'

type MyProps = {
    type?: 'success' | 'error'
    message: string
}

const Alert = ({
    type = 'success',
    message
}: MyProps) => {
    return (
        <S.Wrapper type={type}>
            <S.Icon>
                {
                    type === 'error' 
                    ? <MdErrorOutline />
                    : <MdOutlineCheckCircleOutline />
                }
            </S.Icon>
                <p>{message}</p>
        </S.Wrapper>
    )
}

export default Alert