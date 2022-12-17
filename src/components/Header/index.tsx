import Image from "next/image"
import * as S from "./styles"

const Header = () => {

    return( 
        <S.Wrapper>
            <S.TopSection>
                <S.LogoContainer>
                    <S.Logo>
                        <Image
                            src={'/img/logo.png'}
                            width={50}
                            height={50}
                            alt='Dark logo with <JV/> wrote'
                        />
                    </S.Logo>
                    <h1>João Vitor Brietzke Lima</h1>
                </S.LogoContainer>
                <S.Navlinks>
                    <li>Sobre</li>
                    <li>Habilidades</li>
                    <li>Portifólio</li>
                </S.Navlinks>
                <S.HamburgerIcon>
                    <div></div>
                    <div></div>
                    <div></div>
                </S.HamburgerIcon>
            </S.TopSection>
            <S.DropdownSection>
                
            </S.DropdownSection>
        </S.Wrapper>

    )
}

export default Header