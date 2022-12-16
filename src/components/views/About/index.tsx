import Image from "next/image"
import Fade from 'react-reveal/Fade'

import * as S from "./styles"
import { FaHouseUser, FaBug, FaUserAstronaut, FaCogs } from "react-icons/fa"
import Container from "../../Container";

type Card = {
    title: string;
    text: string;
    icon: JSX.Element
};

const cards : Card[] = [
    {
        title: "2 Years with",
        text: "JavaScript",
        icon: <FaBug/>
    },
    {
        title: "15+ Projects",
        text: "Delivered",
        icon: <FaCogs/>
    },
    {
        title: "Freelancer",
        text: "Available",
        icon: <FaUserAstronaut/>
    },
]

const About = () => {
    return (
        <S.Wrapper>
            <Container>
                <S.CustomTitle>
                    <Fade top duration={1300}>
                        <h1>About Me</h1>
                        <p>Hi! Nice to meet ...</p>
                    </Fade>
                </S.CustomTitle>
                <Fade>
                    <S.Card>
                        <S.CardContent>
                            <S.ImageContainer>
                                <Image 
                                    src='/img/my_photo.jpeg'
                                    alt="Uma foto minha sorrindo" 
                                    width={400}
                                    height={400}
                                />
                            </S.ImageContainer>
                            <S.Info>
                                <S.Line>
                                    <S.Ball />
                                </S.Line>
                                <div>
                                    <div className="d-flex flex-column">
                                        <h5>João Vitor Brietzke de Lima</h5>
                                        <span><FaHouseUser/> Porto Alegre - Brazil</span>
                                    </div>
                                    <p>Hello, I’m João Vitor and I’m a software engineer. I chose this profession because is a really great way to develop virtual ideas and bring them to reality.</p>
                                    <p>I have been surfing in this ocean of knowledge and I&lsquo;m growing increasingly passionate about facing the new challenges found in this field.</p>
                                    <p>I consider myself a hardworking and creative person. I have been careful to stay in touch with the latest technologies, using only the latest cutting-edge material, within my work.</p>
                                </div>
                            </S.Info>
                        </S.CardContent>
                        <S.Icons>
                            {cards.map(({title, text, icon}) => (
                                <S.IconContainer key={title}>
                                    <S.Icon>
                                        {icon}
                                    </S.Icon>
                                    <div>
                                        <h6>{title}</h6>
                                        <span>{text}</span>
                                    </div>
                                </S.IconContainer>
                            ))}
                        </S.Icons>
                    </S.Card>
                </Fade>
            </Container>
        </S.Wrapper>
    )
}

export default About