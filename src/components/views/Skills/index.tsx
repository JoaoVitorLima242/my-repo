import { 
    FaTv,
    FaCogs,
    FaMobileAlt,
    FaPlug,
    FaBolt,
    FaBuilding
} from "react-icons/fa"

import Container from "../../Container";
import * as S from "./styles"
import Fade from 'react-reveal/Fade'

type Expertise = {
    title: string;
    description: string;
    icon: JSX.Element;
}

const Skills = () => {

    const expertises: Expertise[] = [
        {
            title: 'Responsive web development',
            description: 'Responsive applications for both mobile and desktop!',
            icon: <FaTv />
        },
        {
            title: 'API development',
            description: 'REST APIs that adapt to your needs and follow best practices in performance and security.',
            icon: <FaCogs />
        },
        {
            title: 'Mobile development',
            description: 'Hybrid mobile apps that will work on both iOS and Android, saving you time and money in development.',
            icon: <FaMobileAlt />
        },
        {
            title: 'Third-party API integration',
            description: 'Integration with any third-party API of your choice. Extend the functionality of your apps with minimal effort.',
            icon: <FaPlug />
        },
        {
            title: 'Optimization',
            description: 'Use of updated technologies to have an application with performance and optimized for Google.',
            icon: <FaBolt />
        },
        {
            title: 'Systems Architecture',
            description: 'The architecture of a system says a lot about it. We build scalable system architectures that are easy to adapt/maintain.',
            icon: <FaBuilding />
        },

    ]
   return (
        <S.Wrapper id="Skills">
            <Container>
            <Fade top duration={1300}>
                <S.CustomTitle>
                    <h1>Skills</h1>
                    <p>These are some skills of my skills!</p>
                </S.CustomTitle>
            </Fade>
                <S.Expertises>
                    {expertises.map(({title, description, icon}, index) => (
                        <Fade key={title} duration={1300}>
                            <S.Expertise>
                                <S.Icon>
                                    {icon}
                                </S.Icon>
                                <h3>{title}</h3>
                                <p>{description}</p>
                            </S.Expertise>
                        </Fade>
                    ))}
                </S.Expertises>
            </Container>
        </S.Wrapper>
    );
};

export default Skills;