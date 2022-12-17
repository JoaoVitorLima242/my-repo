import Image from "next/image"
import * as S from "./styles"
import { useState } from "react"

const Header = () => {
    const [dropdown, setDropdown] = useState(false)

    const dropdownHandler = () => {
        setDropdown(!dropdown)
    }
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
                    <li>About Me</li>
                    <li>Skills</li>
                    <li>Portifolio</li>
                </S.Navlinks>
                <S.HamburgerIcon onClick={dropdownHandler}>
                    <div></div>
                    <div></div>
                    <div></div>
                </S.HamburgerIcon>
            </S.TopSection>
            <S.DropdownSection isOpen={dropdown}>
                <p>About Me</p>
                <p>Skills</p>
                <p>Portifolio</p>
            </S.DropdownSection>
        </S.Wrapper>

    )
}

export default Header