import styled from "styled-components";


export const Wrapper = styled.div`
    background-color: #282a36;
    padding: 20px 0;
`

export const CustomTitle = styled.div`
    text-align: center;

    h1 {
      color: #8be9fd;
      font-family: 'Lobster Two',cursive;
      font-size: 50px;
      padding-top: 40px;
      text-shadow: 4px 2px 0 #44475a;
      font-weight: 700;
    }
    p {
      color: #f8f8f2;
      font-size: 22px;
      font-family: 'Montserrat', sans-serif;
      opacity: 0.8;
    }
`

export const Projects = styled.div`
  display: grid;
  justify-content: space-around;
  grid-template-columns: repeat(3, 360px);
  gap: 30px;
  grid-template-rows: repeat(2, 310px);
  padding: 60px 0 30px;
`

export const Project = styled.div`
  background-color: #44475a;
  text-align: center;
  border-radius: 6px;
  transition: all ease-out 0.45s;
  cursor: pointer;
  position: relative;

  img {
    border-radius: 6px 6px 0 0;
  }

  h5 {
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    font-weight: 700;
    padding-top: 10px;
  }
  p {
    color: #8be9fd;
    font-weight: 500;
  }

  :hover {
    transition: all ease-out 0.45s;

    span, div {
      opacity: 1;
    }
  }
`

export const Code = styled.span`
  opacity: 0;
  color: #ffb86c;
  transition: all ease-out 0.25s;

  :hover {
    transition: all ease-out 0.45s;
    opacity: 1;
  }

`

export const More = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px 6px 0 0;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 220px;
  background-color: #8be9fd99;
  opacity: 0;
  transition: all ease-out 0.25s;

  svg {
    color: white;
    height: 60px;
    width: 60px;
  }

  :hover {
    opacity: 1;
  }

`