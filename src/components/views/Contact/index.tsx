import Fade from 'react-reveal/Fade'
import { SiUpwork, SiGithub, SiLinkedin } from 'react-icons/si'

import * as S from './styles'
import Link from 'next/link'

const Contact =  () => {
    return (
        <S.Wrapper id='Contact'>
            <Fade top>
                <S.CustomTitle>
                    <h1>Contact Me</h1>
                    <p>Let&lsquo;s work together!</p>
                </S.CustomTitle>
            </Fade>
            <Fade>
                <S.Form>
                    <label>Name</label>
                    <input />
                    <label>Subject</label>
                    <input />
                    <label>Message</label>
                    <textarea />
                    <S.Button>SUBMIT</S.Button>
                    <S.SocialMedias>
                        <a href='https://github.com/JoaoVitorLima242' target='_blank' rel="noreferrer">
                            <S.SocialMediaButton>
                                <SiGithub />
                                Github
                            </S.SocialMediaButton>
                        </a>
                        <a href='https://www.linkedin.com/in/jo%C3%A3o-vitor-brietzke-de-lima-804a60209/' target='_blank' rel="noreferrer">
                            <S.SocialMediaButton>
                                <SiLinkedin />
                                LinkedIn
                            </S.SocialMediaButton>
                        </a>
                        <a href='https://www.upwork.com/freelancers/~018ea73575e64d2ca4' target='_blank' rel="noreferrer">
                            <S.SocialMediaButton>
                                <SiUpwork />
                                UpWork
                            </S.SocialMediaButton>
                        </a>

                    </S.SocialMedias>
                </S.Form> 
            </Fade>
        </S.Wrapper>
    )
}

export default Contact