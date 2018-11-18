import styled from 'styled-components';
import kriss from 'img/kriss.jpg';

export const AuthorBlockStyle = styled.div`
 .author-block{
  margin-top: 50px;
  margin-bottom: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  .container {
    width: 60%;
    display: flex;
    justify-content: space-around;
    .image-right{
      width: 300px;
      height: 300px;
      background-image: url(${kriss});
      background-size: cover;
      background-position-y: -12px;
      border-radius: 50%;
    }
    .block-left{
      width: 50%;
      .title{
        font-family: "Oswald", sans-serif;
      }
      .info{
        font-size: 18px;
        font-family: 'Mali', cursive;
        text-align: justify;
        padding-right: 20px;
      }
    }
  }
}


@media only screen and (max-width: 1200px) {
  .author-block .container{
    width: 80%;
  }
}

@media only screen and (max-width: 1150px) {
  .author-block .container .block-left{
    width: 80%;
  }
  .author-block .container .image-right{
    width: 200px;
    height: 200px;
  }
}

@media only screen and (max-width: 800px) {
  .author-block .container .block-left .title{
    text-align: center;
  }
  .author-block .container .block-left .image-mobile{
    display: flex;
    justify-content: center;
    .img{
      width: 200px;
      height: 200px;
      background-image: url(${kriss});
      background-size: cover;
      background-position-y: -12px;
      border-radius: 50%;
      margin-bottom: 20px;
    }
  }
  .author-block .container .mobile-hide{
      display: none;
  }
}

@media only screen and (max-width: 500px) {
  .author-block .container {
    width: 100%;
  }
  .author-block .container .block-left {
    width: 90%;
  }
  .author-block .container .block-left .info {
    padding-right: 0;
  }
}
`;