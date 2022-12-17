import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
// @ts-ignore
import * as animateScroll from "svelte-scrollto-next"

import * as S from "./styles"

const Header = () => {
    const [dropdown, setDropdown] = useState(false)

    const dropdownHandler = () => {
        setDropdown(!dropdown)
    }

    const scrollToTopHandler = () => {
        animateScroll.scrollToTop()
    }

    const scrollToElementHandler = (elementId: string) => {
        animateScroll.scrollTo({element: `#${elementId}`, offset: -78, duration: 800})
        setDropdown(false)
    }

    return( 
        <S.Wrapper>
            <S.TopSection>
                <S.LogoContainer>
                    <S.Logo onClick={scrollToTopHandler}>
                        <Image
                            src={'/img/logo.png'}
                            width={50}
                            height={50}
                            alt='Dark logo with <JV/> wrote'
                        />
                    </S.Logo>
                    <h1 onClick={scrollToTopHandler}>João Vitor Brietzke Lima</h1>
                </S.LogoContainer>
                <S.Navlinks>
                    <li onClick={() => scrollToElementHandler('About')}>About Me</li>
                    <li onClick={() => scrollToElementHandler('Skills')}>Skills</li>
                    <li onClick={() => scrollToElementHandler('Portifolio')}>Portifolio</li>
                </S.Navlinks>
                <S.HamburgerIcon onClick={dropdownHandler}>
                    <div></div>
                    <div></div>
                    <div></div>
                </S.HamburgerIcon>
            </S.TopSection>
            <S.DropdownSection isOpen={dropdown}>
                <p onClick={() => scrollToElementHandler('About')}>About Me</p>
                <p onClick={() => scrollToElementHandler('Skills')}>Skills</p>
                <p onClick={() => scrollToElementHandler('Portifolio')}>Portifolio</p>
            </S.DropdownSection>
        </S.Wrapper>

    )
}

export default Header