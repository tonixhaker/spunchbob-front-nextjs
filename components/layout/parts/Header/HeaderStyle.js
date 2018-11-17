import styled from 'styled-components';
import headeLogo from 'img/header-logo.png';
import '../../../../common/styles/styles.scss';
export const HeaderStyle = styled.div`
  .header{
  box-shadow: 0px 2px 5px rgba(0,0,0,0.1);
  position: fixed;
  width: 100%;
  top: 0;
  min-height: 60px;
  background: #f6f6f6!important;
  z-index: 100;
  .headerfix{
    max-width: 1700px;
  }
  .logo{
    background-image: url(${headeLogo});
    height: 60px;
    width: 100px;
    background-size: cover;
    background-position: center;
  }
  .mobile-header-button{
    margin-top: -10px;
    display: none;
  }
  .nav-menu{
    font-family: 'Oswald', sans-serif;
    ul{
      height: 100%;
      list-style: none;
      margin: 0;
      padding: 0;
      li{
        padding: 0 10px;
        a {
          letter-spacing: 0px;
          font-size: 20px;
          color: #36a89d;
          text-decoration: none;
          text-transform: uppercase;
        }
        a:hover{
          color: #257166;
        }
      }
    }
  }
  @media only screen and (max-width: 700px) {
    .nav-menu{
      display: none;
    }
    .mobile-header-button{
      display: block;
      position: absolute;
      right: 0;
      top: 20px;
    }
    .menu-container .headerfix a{
      position: absolute;
      left: 20px;
    }
  }
}

`;