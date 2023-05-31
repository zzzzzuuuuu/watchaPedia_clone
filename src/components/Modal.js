import styled from "styled-components";
import Logo from "../assets/image/icon_logo.png";
import Google from "../assets/image/icon_google.png";
import Kakao from "../assets/image/icon_kakao.png";
import Line from "../assets/image/icon_line.png";
import Twitter from "../assets/image/icon_twitter.png";
const Background = styled.div`
  position: fixed;
  top: 0;
  background-color: rgb(0,0,0,0.5);
  width: 100%;
  height: 100%;
`;
const WhiteBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 350px;
  height: 550px;
  margin: auto;
  text-align: center;
  padding: 30px 0;
  border-radius: 5px;
`;
const WatchaName = styled.div`
  margin: auto;
  margin-top: -3px;
`;
const LoginText = styled.p`
  font-size: 18px;
  font-weight: 900;
  margin: 20px;
`;
const TextBox = styled.input`
  align-self: center;
  width: 320px;
  height: 50px;
  margin: 5px;
  background-color: #f5f5f5;
  border-radius: 5px;
  border: none;
`;
const LoginButton = styled.button`
  align-self: center;
  width: 325px;
  height: 50px;
  margin: 10px;
  background-color: #ff0358;
  border-radius: 5px;
  color: white;
  font-size: 15px;
  border: none;
`;
const Flex = styled.div`
  display: flex;
  justify-content: center;
`;

const Text = styled.p`
  font-size: 15px;
  font-weight: 600;
  padding: 0px 2px;
  margin: 10px 0;
`;
const TextPink = styled(Text)`
  color: #ff0358;
`;
const TextGray = styled(Text)`
  color: #a3a3a3;
`;

const Hr = styled.pattern`
  color: #a0a0a0;
  margin-top: 10px;
`;
const OR = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: #8c8c8c;
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;
const Img = styled.img`
  margin: 0 8px;
`;

const Tip = styled.div`
  display: flex;
  width: 330px;
  height: 50px;
  background-color: #f7f7f7;
  border-radius: 10px;
  color: #8c8c8c;
  text-align: center;
  font-size: 15px;
  align-self: center;
  padding-top: 0;
  font-weight: 600;
  margin-top: 25px;
  margin-bottom: -8px;
  padding: 15px 0;
`;

const Modal = () => {
  return (
    <>
      <Background>
        <WhiteBox>
          <WatchaName>
            <img src={Logo} width="220px"></img>
            <LoginText>로그인</LoginText>
          </WatchaName>
          <TextBox placeholder="이메일"></TextBox>
          <TextBox placeholder="비밀번호"></TextBox>
          <LoginButton>로그인</LoginButton>
          <TextPink>비밀번호를 잊어버리셨나요?</TextPink>
          <Flex>
            <TextGray>계정이 없으신가요?</TextGray>
            <TextPink>회원가입</TextPink>
          </Flex>
          <Hr>
            ─────────<OR> OR </OR>─────────
          </Hr>
          <Icons>
            <Img src={Kakao}></Img>
            <Img src={Google}></Img>
            <Img src={Twitter}></Img>
            <Img src={Line}></Img>
          </Icons>
          <Tip>
            Tip.왓챠 계정이 있으신가요? 왓챠와 왓챠피디아는 같은 계정을
            사용해요.
          </Tip>
        </WhiteBox>
      </Background>
    </>
  );
};

export default Modal;
