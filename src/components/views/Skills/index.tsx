import * as S from "./styles"
import { 
    FaTv,
    FaCogs,
    FaDatabase,
    FaPlug,
    FaBolt,
    FaBuilding
} from "react-icons/fa"

type Expertise = {
    h3: string;
    p: string;
    icon: JSX.Element;
}

const Skills = () => {

    const expertises: Expertise[] = [
        {
            h3: 'Desenvolvimento Web responsivo',
            p: 'Aplicações responsivas tantos para mobile quanto desktop!',
            icon: <FaTv />
        },
        {
            h3: 'Desenvolvimento de API',
            p: 'APIs REST que se adaptam às suas necessidades e seguem as melhores práticas em desempenho e segurança',
            icon: <FaCogs />
        },
        {
            h3: 'Desing de Banco de Dados',
            p: 'Desing de banco de dados para desenvolvimentoeficaz, sempre visando desempenho, escala e estabilidade.',
            icon: <FaDatabase />
        },
        {
            h3: 'Integração de APIs de terceiros',
            p: 'Integração com qualquer API de terceiros de sua escolha. Estenda a funcionalidade de seus aplicativos com o mínimo de esforço.',
            icon: <FaPlug />
        },
        {
            h3: 'Otimização',
            p: 'Utilizações de tecnologias atuais para ter uma aplicação mais rápida com um melhor SEO.',
            icon: <FaBolt />
        },
        {
            h3: 'Arquitetura de Sistemas',
            p: 'Desenvolver nem sempre é tudo, mas a arquitetura de um sistema diz muito sobre ele. Construímos arquiteturas de sistemas escaláveis e de fácil adaptação/manutenção.',
            icon: <FaBuilding />
        },

    ]

   return (
        <S.Wrapper>
            <div className="wd-cont">
                <S.CustomTitle>
                    <h1>Habilidades</h1>
                    <p>Algumas tecnologias que eu tenho conhecimento!</p>
                </S.CustomTitle>
                <div className="expertises">
                    {expertises.map(({h3, p, icon}) => (
                        <div className="expertise" key={h3}>
                            <div className="icon">
                                {icon}
                            </div>
                            <h3>{h3}</h3>
                            <p>{p}</p>
                        </div>
                        
                    ))}
                </div>

            </div>
        </S.Wrapper>
    );
};

export default Skills;