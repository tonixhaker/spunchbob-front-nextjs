import styled from 'styled-components';
import google from 'img/google.png';

export const LoginFormStyle = styled.div`
    form{
      background: #5aa17366;
      padding: 20px;
      border-radius: 15px;
      .login-button-container{
        margin-top: 20px;
        .social-auth{
          flex-wrap: wrap;
          .googleButton{
            background: #353a66;
            height: 40px;
            width: 223px;
            min-width: 223px;
            border: 0;
            font-size: 16px;
            color: white;
            p{
              margin-top: 8px;
            }
            .googlepic{
              margin-top: 1px;
              height: 35px;
              width: 35px;
              margin-right: 10px;
              background-image: url(${google});
              background-size: contain;
              background-repeat: no-repeat;
            }
            .contain{
              display: flex;
              justify-content: space-around;
            }
          }
          div, button{
            margin: 0 5px 10px 0;
          }
        }
        .simple-login{
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
        }
      }
    }
    .login-form{
      .form-title{
        font-family: "Oswald", sans-serif;
        text-align: center;
        font-size: 40px;
        text-shadow: 2px 2px #ffffff;
        color: rgb(54, 168, 157);
      }
    }
`;