import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #383a59;
    padding: 20px;
    
        .carousel {
            margin: 0 auto;

            .react-multi-carousel-track {
                height: 180px;
            }

            .react-multi-carousel-dot button {
                border: none;
                border-radius: 8px;
                height: 6px;
                width: 39px;
                background-color: #9BFBB370;
            }
            .react-multi-carousel-dot--active button {
                background-color: #50FA7B;
                box-shadow: 0px 0px 4px 0px #50fa7b;
            }
            
            .item {
                display: flex;
                align-items: center;
                justify-content: center;

                img {
                    width: 100%;
                    background-color: #282a36;
                    border-radius: 24px;
                    margin: 0 auto !important;
                    border: 4px solid #282a36;
                }
            }
        }
`   