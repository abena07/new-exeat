import styled from 'styled-components';
import Img from '../Assets/hero.jpg';

export const Section = styled.div`
  text-align: center;
  h1 {
    font-size: 25px;
    padding: 3rem 0 1.5rem 0;
  }
  h2 {
    font-size: 18px;
    font-style: italic;
    font-weight: 200px;
    padding-bottom: 2rem;
    width: 80%;
    margin-left: 10%;
    line-height: 40px;
  }
  .container {
    background: url(${Img});
    width: 100%;
    background-position: center;
    background-size: cover;
    height: 100vh;
    .heading-text {
      width: 70%;
      margin-left: 15%;
      background: #00000078;
      line-height: 5vh;
      color: white;
      border-radius: 10px;
      position: absolute;
      top: 200px;
    }
    button {
      padding: .5rem 1rem;
      font-size: 18px;
      margin-top: 3rem;
      background-color: #fe4880;
      position: absolute;
      top: 420px;
      border-radius: 10px;
      transition: all 0.2s ease-in-out;

      &:hover {
        background: white;
        color: black;
      }
    }

    
    a {
      color: white;
      text-decoration: none
    }
  }
`;

 export default Section;