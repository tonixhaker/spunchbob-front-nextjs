import styled from 'styled-components';

export const LatestPostsStyle = styled.div`
 .latest-posts-block{
  text-align: center;
  padding: 50px;
  .block-title{
    margin-bottom: 20px;
    font-size: 30px;
    font-family: "Oswald", sans-serif;
  }
  p{
    margin: 0;
  }
  .container{
    display: flex;
    justify-content: space-between;
    padding: 10px 200px;
    .post-card{
      box-shadow: 0 4px 8px 0 rgba(0,0,0,.15);
      padding: 10px;
      border-radius: 10px;
      width: 350px;
      .post-description{
        display: block;
        padding: 0 10px;
        height: 200px;
        overflow: hidden;
        font-size: 15px;
        text-align: justify;
        margin-bottom: 20px;
      }
      .post-title{
        font-size: 20px;
        padding: 10px;
      }
    }
    .post-img{
      height: 200px;
      background-position: center;
      background-size: cover;
      border-radius: 15px;
    }
  }
}

@media only screen and (max-width: 1600px) {
  .latest-posts-block .container{
    padding: 10px 50px;
  }
}

@media only screen and (max-width: 1200px) {
  .latest-posts-block .container .post-card
  {
    width: 300px;
  }
}

@media only screen and (max-width: 1150px) {
  .latest-posts-block {
    text-align: center;
    padding: 50px 0;
  }
  .latest-posts-block .container{
    flex-wrap: wrap;
    justify-content: center;
  }
  .latest-posts-block .container .post-card{
    margin: 0 30px 20px;
  }

}

@media only screen and (max-width: 800px) {
  .latest-posts-block .container .post-card {
    width: 80%;
  }
}

@media only screen and (max-width: 500px) {
  .latest-posts-block .container .post-card {
    width: 100%;
    margin: 10px 0;
  }
  .latest-posts-block .container {
    padding: 10px;
  }
}
`;