import styled from 'styled-components';
import burger from 'img/burger.jpeg';

export const InviteBlockStyle = styled.div`
 .invite-block {
  width: 100%;
  .container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .image-left{
      background-image: url(${burger});
      width: 60%;
      height: 550px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .block-right{
      height: 550px;
      width: 40%;
      background: #36a89d;
      .title{
        text-align: center;
        padding-top: 20px;
        font-size: 4em;
        font-family: "Oswald", sans-serif;
        color: white;
      }
      .info{
        text-align: justify;
        padding: 0 40px;
        font-size: 18px;
        font-family: 'Mali', cursive;
        color: white;
      }
    }
  }
}

@media only screen and (max-width: 1320px) {
  .invite-block .container .block-right{
    width: 60%;
  }
  .invite-block .container .image-left{
   width: 40%;
  }
}

@media only screen and (max-width: 900px) {
  .invite-block .container .image-left {
    width: 100%;
  }
  .invite-block .container .block-right {
    width: 100%;
    margin-top: -150px;
    padding-bottom: 20px;
    height: auto;
  }
}
`;