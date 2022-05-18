import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #282a36;
    height: 78px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: sticky;
    top: 0;

    h1 {
        font-family: 'Lobster Two', cursive;
        color: white;
        text-shadow: 4px 2px 0 #6272a4;
        font-weight: 900;
    }

    .nav-links {
        display: flex;

    }
    li { 
        list-style-type: none;
        padding: 0 20px;
        font-size: 22px;
        font-family: 'Montserrat', sans-serif;
        color: #bd93f9;
    }

    `
