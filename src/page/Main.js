// ../src/pages/Main.js

import { useState } from "react";
import styled from "styled-components";
import Modal from "../components/Modal";
import kakao from "../assets/image/icon_kakao.png";
import google from "../assets/image/icon_google.png";
import twitter from "../assets/image/icon_twitter.png";
import line from "../assets/image/icon_line.png";
import logo from "../assets/image/icon_logo.png";

const Main = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const openModal = () => {
    setLoginModalOpen(true);
  };

  const closeModal = () => {
    setLoginModalOpen(false);
  };
  return (
    <>
      <LoginButton onClick={openModal}>로그인</LoginButton>
      <Modal open={loginModalOpen} close={closeModal}>
        <LogoImage src={logo} alt="로고 이미지" />
        <Title>로그인</Title>
        <LoginInput placeholder="이메일" />
        <LoginInput placeholder="비밀번호" />
        <LoginRedButton>로그인</LoginRedButton>
        <Content color="#ff2f6e">비밀번호를 잃어버리셨나요?</Content>
        <CenterBlock>
          <Content color="#8c8c8c">계정이 없으신가요?</Content>
          <Content color="#ff2f6e">회원가입</Content>
        </CenterBlock>
        <CenterBlock>
          <GrayLine />
          <OrContent>OR</OrContent>
          <GrayLine />
        </CenterBlock>
        <WrapIcon>
          <img src={kakao} alt="kako" />
          <img src={google} alt="google" />
          <img src={twitter} alt="twitter" />
          <img src={line} alt="line" />
        </WrapIcon>
        <LoginTip>
          TIP.왓챠 계정이 있으신가요? 왓챠와 왓챠피디아는 같은 계정을 사용해요.
        </LoginTip>
      </Modal>
    </>
  );
};

const LoginButton = styled.div`
  margin-right: 20px;
  border: none;
  background: none;
`;

const LogoImage = styled.img`
  width: 200px;
`;

const CenterBlock = styled.div`
  display: flex;
  justify-content: center;
`;

const WrapIcon = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 40px;
`;

const Title = styled.div`
  font-weight: bolder;
  font-size: 17px;
  margin-bottom: 20px;
`;

const LoginRedButton = styled.button`
  width: 330px;
  height: 40px;
  margin-top: 20px;
  background-color: #ff2f6e;
  border-radius: 5px;
  border: none;
  text-align: center;
  color: white;
  font-size: 15px;
  font-weight: bolder;
`;

const Content = styled.div`
  color: ${(props) => props.color};
  margin: 15px 10px;
`;

const LoginInput = styled.input`
  width: 330px;
  height: 40px;
  margin: 5px;
  background-color: #f5f5f5;
  border: none;
  border-radius: 5px;
  ::placeholder {
    font-size: 15px;
    padding-left: 10px;
  }
`;

const GrayLine = styled.div`
  width: 130px;
  height: 1px;
  background-color: #00000020;
  margin-top: 10px;
`;

const OrContent = styled.div`
  color: #8c8c8c;
  font-size: 14px;
  margin: 0 20px;
`;

const LoginTip = styled.div`
  color: #8d8e8f;
  background-color: #f7f7f7;
  height: 50px;
  padding-top: 10px;
  border-radius: 5px;
  margin: 10px;
`;

export default Main;
