import Fade from 'react-reveal/Fade'
import { useState } from 'react'
import { SiUpwork, SiGithub, SiLinkedin } from 'react-icons/si'
import { useForm } from 'react-hook-form'
import axios from 'axios'

import * as S from './styles'
import Alert from '../../Alert'

export type ContactFormFields = {
    name: string
    email: string
    subject: string
    message: string
}

type PostResponse = {
    message: string
    error: boolean

}

const Contact =  () => {
    const { register, handleSubmit, formState: { errors }, reset} = useForm<ContactFormFields>()

    const [ error, setError ] = useState('')
    const [ emailSuccess, setEmailSuccess] = useState('')
    const missingRequiredValue = !!errors.name || !!errors.email || !!errors.subject || !!errors.message

    const onSubmit = async (data: ContactFormFields) => {
        setError('')
        setEmailSuccess('')
        try {
            await axios.post<PostResponse>('/api/contact-me', data)

            setEmailSuccess('Email send with success!')
        } catch (err) {
            setError('There was an error sending your email')
        }

        reset()
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
                    <S.Input 
                        error={!!errors.name} 
                        {...register('name', { required: true })}
                    />
                    <label>Email</label>
                    <S.Input 
                        error={!!errors.email} 
                        {...register('email', { required: true })}
                    />
                    <label>Subject</label>
                    <S.Input 
                        error={!!errors.subject} 
                        {...register('subject', { required: true })}
                    />
                    <label>Message</label>
                    <S.TextArea 
                        error={!!errors.message} 
                        {...register('message', { required: true })}
                    />
                    <S.Button>SUBMIT</S.Button>
                    { (error || missingRequiredValue) && 
                        <Alert type='error' message={error || 'Please, fill in all fields of the form'}/>
                    }
                    { emailSuccess &&  
                        <Alert type='success' message={emailSuccess}/>
                    }
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