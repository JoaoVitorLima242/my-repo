import Fade from 'react-reveal/Fade'
import * as S from "./styles"

const Welcome = () => {

    return(
        <S.Wrapper>
                <S.Content>               
                    <Fade top>
                        <h1>Full-Stack Web and Mobile Developer</h1>
                    </Fade>
                    <Fade top delay={100}>
                        <S.Techs>
                            <p>ReactJS, React Native, NextJS, Redux, NodeJS,<br/> MongoDB, Typescript & GraphQL</p>
                        </S.Techs>
                    </Fade>
                </S.Content>
        </S.Wrapper>
    )
}

export default Welcome