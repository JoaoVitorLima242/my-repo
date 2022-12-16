import Reveal from 'react-reveal/Reveal'
import * as S from "./styles"

const Welcome = () => {

    return(
        <S.Wrapper>
            <Reveal ssrReveal>
                <S.Content>               
                    <h1>Full-Stack Web and Mobile Developer</h1>
                    <S.Techs>
                        <p>ReactJS, React Native, NextJS, Redux, NodeJS,<br/> MongoDB, Typescript & GraphQL</p>
                    </S.Techs>
                </S.Content>
            </Reveal>
        </S.Wrapper>
    )
}

export default Welcome