import Carousel from "react-multi-carousel"
import Image from "next/image"

import * as S from "./styles"
import Container from "../../Container";
import { size } from "../../../constants/size";

const Tech = () => {

    const reponsive = {
        desktopL: {
            breakpoint: { max: 4000, min: size.desktopL },
            items: 10
        },
        desktop: {
            breakpoint: { max: size.desktopL, min: size.desktop },
            items: 6
        },
        laptop: {
            breakpoint: { max: size.desktop, min: size.tablet },
            items: 6
        },
        tablet: {
            breakpoint: { max: size.tablet, min: size.mobile },
            items: 3
        },
        mobile: {
            breakpoint: { max: size.mobile, min: 0 },
            items: 2
        },

    }

    const items = [
        'css',
        'git',
        'html',
        'js',
        'react',
        'styled-components',
        'ts',
        'mongo',
        'node'
    ]

   return (
        <S.Wrapper>
            <Container>
                <Carousel
                    responsive={reponsive}
                    ssr={true}
                    className="carousel"
                    infinite={true}
                    arrows={false}
                    showDots={true}
                >
                    {
                        items.map((item) => (
                            <S.Item key={item}>
                                <Image 
                                    src={`/img/${item}.png`} 
                                    alt={item}
                                    width={130}
                                    height={130}
                                />
                            </S.Item>
                        ))
                    }
                    </Carousel>
                </Container>
        </S.Wrapper>
    );
};

export default Tech;