import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #44475a;
    padding: 40px 20px;
`

export const Content = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    background-color: #282a36;
    padding: 20px 40px;
    margin: 20px;
    border-radius: 12px;
    position: relative;

    img {
        border-radius: 50%;
    }
`

export const Info = styled.div`
    display: flex;

    h5 {
        font-family: 'Lobster Two',cursive;
        font-weight: 700;
        text-shadow: 4px 2px 0  #f8f8f220;
        color: #ff79c6;
        font-size: 30px;
    }

    p {
        font-size: 21px;
        color: white;
        margin: 18px 0 ;
    }

    span {
        color: #ff79c6;
    }
`

export const Line = styled.div`
    width: 8px;
    border-radius: 4px;
    background-color: #ff79c6;
    height: auto;
    margin: 0 20px;
    position: relative;
`

export const Ball = styled.div`
    position: absolute;
    top: 8px;
    right: -10px;
    width: 16px;
    height: 16px;
    border: solid 4px #994876;
    box-shadow: 0px 0px 19px 0px #994876;
    border-radius: 50%;
    background-color: #ff79c6;
`

export const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 35px 40px 5px;
    margin-left: auto;

    h6, span {
        margin-left: 10px;
        margin-right: 60px;
    }

    h6 {
        margin-bottom: 0 !important;
        color: white;
    }
    
    span {
        color: #ff79c6;
    } 
`

export const Icon = styled.div`
    width: 46px;
    height: 46px;
    border: solid 4px #994876;
    box-shadow: 0px 0px 19px 0px #994876;
    border-radius: 50%;
    background-color: #ff79c6;
    display: flex;
    align-items: center;

    
    svg {
        width: 30px;
        height: 30px;
        color: white;
        margin: 0 auto;
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
      font-size: 22px;
      font-family: 'Montserrat', sans-serif;
      opacity: 0.8;
    }
`