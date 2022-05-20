import Image from "next/image"
import * as S from "./styles"
import { FaSearch } from 'react-icons/fa'

type Project = {
    title: string;
    text: string;
    img: string;
    alt: string;
}

const Portifolio = () => {

    const projects : Project[] = [
        {
            title: 'Marketplace',
            text: 'Web application',
            img: '/img/projects/barbada.png',
            alt: "Marketplace com diversos produtos"
        },
        {
            title: 'Sistema de pagamentos',
            text: 'Web application',
            img: '/img/projects/pmt.png',
            alt: "Uma tabela com diversos dados"
        },
        {
            title: 'Bonuz Jurídico',
            text: 'Landing Page',
            img: '/img/projects/bonuz.png',
            alt: "Uma landing page com uma corujinha"
        },
        {
            title: 'Payroll - Folha de pagamento',
            text: 'Website',
            img: '/img/projects/payroll.png',
            alt: "Uma tabela com diversos dados"
        },
        {
            title: 'Hubs',
            text: 'Landing Page',
            img: '/img/projects/bonuz-hub.png',
            alt: "Uma landing page com uma corujinha"
        },
        {
            title: 'Flexbox CSS - Info',
            text: 'Website',
            img: '/img/projects/flex.png',
            alt: "Pagina informativa com comentarios sobre flexbox"
        },
    ]

    return (
        <S.Wrapper>
            <div className="wd-cont">
                <S.CustomTitle>
                    <h1>Portifólio</h1>
                    <p>Estes são alguns projetos no qual participei!</p>
                </S.CustomTitle>
                <S.Projects>
                    {projects.map(({title, text, img, alt}, count) => (
                        <div className="project" key={count}>
                            <Image
                                width={360}
                                height={220}
                                src={img}
                                alt={alt}
                            />
                            <h5><span className="code">&lt; </span>{title}<span className="code"> &#47;&gt;</span></h5>
                            <p>{text}</p>
                            <div className="more"><FaSearch/></div>
                        </div>
                    ))}
                </S.Projects>

            </div>
        </S.Wrapper>
    )
}

export default Portifolio