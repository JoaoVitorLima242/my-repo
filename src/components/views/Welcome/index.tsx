import * as S from "./styles"

const Welcome = () => {

    return(
        <S.Wrapper>
            <div className="content">               
                <h1>Full-Stack Web and Mobile Developer</h1>
                <S.Techs>
                    <p>ReactJS, React Native, NextJS, Redux, NodeJS,<br/> MongoDB, Typescript & GraphQL</p>
                </S.Techs>
            </div>
        </S.Wrapper>
    )
}

export default Welcome