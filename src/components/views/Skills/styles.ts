import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #383a59;
    padding: 20px;
    
    .expertises {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-top: 60px;

        .expertise {
            text-align: center;
            max-width: 300px;
            margin: 20px;
    
            h3 {
                font-size: 24px;
                color: #ffffff;
                font-weight: 700;
                margin: 8px 0;
            }
    
            p {
                font-size: 16px;
                color: #ffffff;
            }
    
            .icon {
                display: flex;
                margin: 0 auto;
                align-items: center;
                justify-content: center;
                width: 112px;
                height: 112px;
                border-radius: 50%;
                background-color: #50fa7b;
                color: #ffffff;
                box-shadow: 0px 0px 19px 0px #50fa7b;
                margin-bottom: 40px;
    
                svg {
                    width: 70px;
                    height: 70px;
                }
            }
        }
    }
`

    export const CustomTitle = styled.div`
        text-align: center;

        h1 {
        color: #50fa7b;
        font-family: 'Lobster Two',cursive;
        font-size: 50px;
        padding-top: 40px;
        text-shadow: 4px 2px 0 #282a36;
        font-weight: 700;
        }
        p {
        color: #f8f8f2;
        font-size: 22px;
        font-family: 'Montserrat', sans-serif;
        opacity: 0.8;
        }
    `