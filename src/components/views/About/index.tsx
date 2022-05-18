import * as S from "./styles"
import Image from "next/image"
import { FaHouseUser, FaBug, FaUserAstronaut } from "react-icons/fa"

type Card = {
    h6: string;
    span: string;
    icon: JSX.Element
};

const cards : Card[] = [
    {
        h6: "10+ Projetos",
        span: "Entregues",
        icon: <FaBug/>
    },
    {
        h6: "Freelancer",
        span: "Disponivel",
        icon: <FaUserAstronaut/>
    },
]

const About = () => {
    return (
        <S.Wrapper>
            <div className="wd-cont">
                <S.CustomTitle>
                    <h1>Sobre mim</h1>
                    <p>Oi! Prazer em te conhecer ...</p>
                </S.CustomTitle>
                <div className="content">
                    <div className="d-flex">
                        <div className="profile-img">
                            <Image 
                                src='/img/1616614690713.jpeg'
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
                                <span><FaHouseUser/> Porto Alegre - RS</span>
                            </div>
                            <p>Olá, tudo bem? Sou o João Vitor, um desenvolvedor web de 20 anos que está admirado com esse mundo de códigos! Comecei a trabalhar com desenvolvimento por ser uma pessoa que gosta de desafios e de estar sempre aprendendo cada vez mais coisas novas!</p>
                            <p>Com a programação, também consigo pegar projetos que eram apenas ideias e transforma-los em realidade.</p>
                            <p>Me considero uma pessoa muito esforçada e criativa. Espero poder te ajudar a criar suas ideias em realidade.</p>
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