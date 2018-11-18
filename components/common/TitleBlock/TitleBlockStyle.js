import styled from 'styled-components';
import back from  'img/title-background.jpg';

export const TitleBLockStyle = styled.div`
 .title-block{
 position: relative;
  .paralax-content{
    z-index: 1;
    position: inherit;
    text-align: center;
    user-select: none;
    height: 300px;
    display: flex;
    justify-content: center;
    flex-direction: column;
      .title{
      font-size: 8em;
      font-family: "Oswald", sans-serif;
      color: #f6f6f6;
      text-shadow: 2px 2px #36a89d;
      font-weight: 600;
      letter-spacing: 3px;
        p{
          margin: 0;
        }
    }
    .call{
      p {
        font-family: 'Lobster', cursive;
        font-size: 25px;
        color: #f6f6f6;
      }
    }
  }
  .simple-background{
    background-image: url(${back});
    background-size: cover;
    position: absolute;
    width: 100%;
    height: 300px;
    z-index: 1;
    filter: blur(4px);
  }
}

@media only screen and (max-width: 500px) {
  .title-block .paralax-content .call p {
    font-size: 18px;
  }
  .title-block .paralax-content .title {
    font-size: 6em;
  }
}
`;