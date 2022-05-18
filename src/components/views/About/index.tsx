import * as S from "./styles"
import Image from "next/image"
import { FaHouseUser } from "react-icons/fa"

const About = () => {
    return (
        <S.Wrapper>
            <div className="wd-cont">
                <S.CustomTitle>
                    <h1>Sobre mim</h1>
                    <p>Oi! Prazer em te conhecer ...</p>
                </S.CustomTitle>
                <div className="content">
                    <div className="profile-img">
                        <Image 
                            src='/img/1616614690713.jpeg'
                            alt="Uma foto minha sorrindo" 
                            width={600}
                            height={600}
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
                        <p>Tenho paixão em enfrentar desafios e com desenvolvimento de software consigo enfrenta-los. Ando surfando nesse mar de códigos e cada vez mais me apaixonando em pegar um projeto que é uma ideia e tornando-o em realidade.</p>
                        <p>Venho desenvolvendo com front-end com linguagem React.Js para estruturação, estilos a base de CSS puro, boostrap e frameworks e claro, o clássico HTML. Utilizo também, node.js para estruturação de api e conexão banco de dados(MongoDB). Sonho em me tornar um desenvolvedor fullstack, deste modo estou me esforçando e estudando para cada vez chegar perto desse objetivo.</p>
                        <p>Me considero uma pessoa muito esforçada e criativa. Espero poder ajudar em sua empresa, para assim, podermos crescer juntos.</p>
                    </div>
                    </div>
                </div>

            </div>
        </S.Wrapper>
    )
}

export default About