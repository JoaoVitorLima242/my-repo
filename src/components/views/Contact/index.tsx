import Fade from 'react-reveal/Fade'
import { SiUpwork, SiGithub, SiLinkedin } from 'react-icons/si'
import { useForm } from 'react-hook-form'

import * as S from './styles'
import axios from 'axios'

export type ContactFormFields = {
    name: string
    email: string
    subject: string
    message: string
}

const Contact =  () => {
    const { register, handleSubmit } = useForm<ContactFormFields>()

    const onSubmit = async (data: ContactFormFields) => {
        try {
            const response = await axios.post('/api/contact-me', data)

            console.log(response)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <S.Wrapper id='Contact'>
            <Fade top>
                <S.CustomTitle>
                    <h1>Contact Me</h1>
                    <p>Let&lsquo;s work together!</p>
                </S.CustomTitle>
            </Fade>
            <Fade>
                <S.Form onSubmit={handleSubmit(onSubmit)}>
                    <label>Name</label>
                    <input {...register('name')}/>
                    <label>Email</label>
                    <input {...register('email')}/>
                    <label>Subject</label>
                    <input {...register('subject')}/>
                    <label>Message</label>
                    <textarea {...register('message')}/>
                    <S.Button>SUBMIT</S.Button>
                    <S.SocialMedias>
                        <a href='https://github.com/JoaoVitorLima242' target='_blank' rel="noreferrer">
                            <S.SocialMediaButton>
                                <SiGithub />
                                <span>Github</span>
                            </S.SocialMediaButton>
                        </a>
                        <a href='https://www.linkedin.com/in/jo%C3%A3o-vitor-brietzke-de-lima-804a60209/' target='_blank' rel="noreferrer">
                            <S.SocialMediaButton>
                                <SiLinkedin />
                                <span>LinkedIn</span>
                            </S.SocialMediaButton>
                        </a>
                        <a href='https://www.upwork.com/freelancers/~018ea73575e64d2ca4' target='_blank' rel="noreferrer">
                            <S.SocialMediaButton>
                                <SiUpwork />
                                <span>UpWork</span>
                            </S.SocialMediaButton>
                        </a>

                    </S.SocialMedias>
                </S.Form> 
            </Fade>
        </S.Wrapper>
    )
}

export default Contact