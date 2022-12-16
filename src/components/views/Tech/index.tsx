import Carousel from "react-multi-carousel"
import Image from "next/image"

import * as S from "./styles"
import Container from "../../Container";

const Tech = () => {

    const reponsive = {
        desktop: {
            breakpoint: { max: 4000, min: 0 },
            items: 6
        }
    }
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
                    <div className="item">
                        <Image 
                            src={"/img/css.png"} 
                            alt="css"
                            width={130}
                            height={130}
                        />
                    </div>
                    <div className="item">
                        <Image 
                            src={"/img/git.png"} 
                            alt="git"
                            width={130}
                            height={130}
                        />
                    </div>
                    <div className="item">
                        <Image 
                            src={"/img/html.png"} 
                            alt="css"
                            width={130}
                            height={130}
                        />
                    </div>
                    <div className="item">
                        <Image 
                            src={"/img/js.png"} 
                            alt="css"
                            width={130}
                            height={130}
                        />
                    </div>
                    <div className="item">
                        <Image 
                            src={"/img/react.png"} 
                            alt="css"
                            width={130}
                            height={130}
                        />
                    </div>
                    <div className="item">
                        <Image 
                            src={"/img/styled-components.png"} 
                            alt="css"
                            width={130}
                            height={130}
                            style={{background: 'white'}}
                        />
                    </div>
                    <div className="item">
                        <Image 
                            src={"/img/ts.png"} 
                            alt="css"
                            width={130}
                            height={130}
                        />
                    </div>
                    <div className="item">
                        <Image 
                            src={"/img/mongo.png"} 
                            alt="css"
                            width={130}
                            height={130}
                        />
                    </div>
                    <div className="item">
                        <Image 
                            src={"/img/node.png"} 
                            alt="css"
                            width={130}
                            height={130}
                        />
                    </div>
                    </Carousel>
                </Container>
        </S.Wrapper>
    );
};

export default Tech;