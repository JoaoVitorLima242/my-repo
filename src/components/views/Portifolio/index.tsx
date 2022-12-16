import Image from "next/image"
import Fade from "react-reveal/Fade"

import * as S from "./styles"
import { FaSearch } from 'react-icons/fa'
import Container from "../../Container";

type Project = {
    title: string;
    text: string;
    img: string;
    alt: string;
}

const Portifolio = () => {

    const projects : Project[] = [
        {
            title: 'Barbada',
            text: 'Marketplace',
            img: '/img/projects/barbada.png',
            alt: "Marketplace with various products"
        },
        {
            title: 'Payment System',
            text: 'Corporate System',
            img: '/img/projects/pmt.png',
            alt: "A table with multiple data"
        },
        {
            title: 'Jurídico',
            text: 'Landing Page',
            img: '/img/projects/bonuz.png',
            alt: "A landing page with a little owl"
        },
        {
            title: 'Payroll',
            text: 'Corporate System',
            img: '/img/projects/payroll.png',
            alt: "A table with multiple data"
        },
        {
            title: 'Surfermates',
            text: 'E-commerce',
            img: '/img/projects/surf.png',
            alt: "A landing page with a little owl"
        },
        {
            title: 'DoeSmart',
            text: 'E-commerce',
            img: '/img/projects/doeSmart.png',
            alt: ""
        },
    ]

    return (
        <S.Wrapper id="portifolio">
            <Container>
                <S.CustomTitle>
                    <Fade top duration={1300}>
                        <h1>Portifolio</h1>
                        <p>These are some projects I participated in!</p>
                    </Fade>
                </S.CustomTitle>
                <S.Projects>
                    {projects.map(({title, text, img, alt}, count) => (
                        <Fade key={count} duration={1300}>
                            <S.Project>
                                <S.ImageContainer>
                                    <Image
                                        layout="fill"
                                        src={img}
                                        alt={alt}
                                    />
                                    <S.More><FaSearch/></S.More>
                                </S.ImageContainer>
                                <div>
                                    <h5>
                                        <S.Code>&lt; </S.Code>{title}<S.Code> &#47;&gt;</S.Code>
                                    </h5>
                                    <p>{text}</p>
                                </div>
                            </S.Project>
                        </Fade>
                    ))}
                </S.Projects>
            </Container>
        </S.Wrapper>
    )
}

export default Portifolio