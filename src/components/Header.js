// import { useState } from "react";
// import styled from "styled-components";
// import Logo from "../assets/image/icon_logo.png";
// import Modal from "./Modal";

// const Header = () => {
//   const [isButton, setIsButton] = useState(false);
//   return (
//     <>
//       <HeaderBar>
//         <Img src={Logo}></Img>
//         <Category style={{ color: "black" }}>영화</Category>
//         <Category>TV</Category>
//         <Category>책</Category>
//         <Category>웹툰</Category>
//         <Gap></Gap>
//         <SearchIcon></SearchIcon>{" "}
//         {/* 돋보기 나중에 다시 제대로 생각하기 ^^!! */}
//         <Search placeholder=" 콘텐츠, 인물, 유저를 검색해보세요."></Search>
//         <LoginButton
//           onClick={() => {
//             setIsButton(true);
//           }}
//         >
//           로그인
//         </LoginButton>
//         {isButton ? <Modal /> : null}
//         <SignupButton>회원가입</SignupButton>
//       </HeaderBar>
//     </>
//   );
// };

// export default Header;

// const HeaderBar = styled.div`
//   display: flex;
//   margin: 0 40px;
//   padding-bottom: 15px;
//   align-items: center;
//   border-bottom: 1px solid #ebebeb;
// `;
// const Img = styled.img`
//   width: 150px;
//   margin: 10px 15px 0 15px;
// `;

// const Category = styled.span`
//   margin: 25px 10px 13px 10px;
//   color: #7e7e7e;
//   /* margin-top: 25px; */
//   font-weight: 600;
// `;

// const Gap = styled.span`
//   width: 32em;
// `;

// const SearchIcon = styled.img`
//   margin-top: 10px;
//   background-image: url("https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png");
//   background-repeat: no-repeat;
//   background-size: 18px;
//   background-position: 10px center;
//   width: 35px;
//   height: 35px;
//   background-color: #f5f5f7;
//   border-radius: 5px;
//   border: 1px solid #f5f5f7;
// `;

// const Search = styled.input`
//   width: 240px;
//   height: 35px;
//   margin-left: -5px;
//   margin-top: 10px;
//   background-color: #f5f5f7;
//   border-radius: 5px;
//   border: none;
//   font-size: 15px;
//   font-weight: 600;
//   color: #74747a;
// `;

// const LoginButton = styled.button`
//   margin-top: 15px;
//   width: 80px;
//   height: 35px;
//   border: none;
//   color: #74747a;
//   background: white;
//   font-size: 15px;
//   font-weight: 600;
// `;

// const SignupButton = styled.button`
//   margin-top: 15px;
//   width: 83px;
//   height: 35px;
//   border: 1px solid #cfcfcf;
//   color: black;
//   font-size: 15px;
//   font-weight: 600;
//   background: white;
//   border-radius: 5px;
// `;

// // const category = styled.p`
// //   color: #353535;
// //   font-size: 15px;
// // `;
// // const search = styled.input`
// //   width: 100px;
// //   height: 15px;
// //   background-color: #f5f5f7;
// //   border-radius: 3px;
// // `;
