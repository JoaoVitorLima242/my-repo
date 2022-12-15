import Image from "next/image"

import * as S from "./styles"
import { FaHouseUser, FaBug, FaUserAstronaut, FaCogs } from "react-icons/fa"

type Card = {
    h6: string;
    span: string;
    icon: JSX.Element
};

const cards : Card[] = [
    {
        h6: "2 Years with",
        span: "JavaScript",
        icon: <FaBug/>
    },
    {
        h6: "15+ Projects",
        span: "Delivered",
        icon: <FaCogs/>
    },
    {
        h6: "Freelancer",
        span: "Available",
        icon: <FaUserAstronaut/>
    },
]

const About = () => {
    return (
        <S.Wrapper id="sobre">
            <div className="wd-cont">
                <S.CustomTitle>
                    <h1>About Me</h1>
                    <p>Hi! Nice to meet ...</p>
                </S.CustomTitle>
                <div className="content">
                    <div className="d-flex">
                        <div className="profile-img">
                            <Image 
                                src='/img/my_photo.jpeg'
                                alt="Uma foto minha sorrindo" 
                                width={400}
                                height={400}
                            />
                        </div>
                        <div className="info">
                        <div className="line">
                            <div className="ball"></div>
                        </div>
                        <div className="text">
                            <div className="d-flex flex-column">
                                <h5>João Vitor Brietzke de Lima</h5>
                                <span><FaHouseUser/> Porto Alegre - Brazil</span>
                            </div>
                            <p>Hello, I’m João Vitor and I’m a software engineer. I chose this profession because is a really great way to develop virtual ideas and bring them to reality.</p>
                            <p>I have been surfing in this ocean of knowledge and I&lsquo;m growing increasingly passionate about facing the new challenges found in this field.</p>
                            <p>I consider myself a hardworking and creative person. I have been careful to stay in touch with the latest technologies, using only the latest cutting-edge material, within my work.</p>
                        </div>
                        </div>
                    </div>
                    <div className="icons">
                        {cards.map(({h6, span, icon}) => (
                            <>
                                <div className="icon">
                                    {icon}
                                </div>
                                <div className="text">
                                    <h6>{h6}</h6>
                                    <span>{span}</span>
                                </div>
                            </>
                        ))}
                    </div>
                </div>

            </div>
        </S.Wrapper>
    )
}

export default About