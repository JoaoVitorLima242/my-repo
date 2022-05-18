import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #44475a;
    padding: 20px;
    .content {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        background-color: #282a36;
        padding: 20px 40px;
        margin: 20px;
        border-radius: 12px;
        position: relative;

        img {
            border-radius: 50%;
        }

        .info {
            display: flex;

            p {
                font-size: 24px;
                color: white;
            }

            .line {
                width: 8px;
                border-radius: 4px;
                background-color: #ff79c6;
                height: auto;
                margin: 0 20px;
            }
        }

    }

`

export const CustomTitle = styled.div`
    text-align: center;

    h1 {
      color: #f8f8f2;
      font-family: 'Lobster Two',cursive;
      font-size: 50px;
      padding-top: 40px;
      text-shadow: 4px 2px 0 #ff79c695;
      font-weight: 700;
    }
    p {
      color: #f8f8f2;
      font-size: 24px;
      font-family: 'Montserrat', sans-serif;
      opacity: 0.8;
    }
`