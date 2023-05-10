// import { useState } from "react";
import BoxOffice from "../components/BoxOffice";
import Header from "../components/Header";
import Data from "../page/Data.json";
// import Modal from "../components/Modal";

const Main = () => {
  // const [isButton, setIsButton] = useState(false);
  return (
    <>
      <Header />
      {/* <button
        onClick={() => {
          setIsButton(true);
        }}
      >
        로그인
      </button>
      {isButton ? <Modal /> : null} */}
      <BoxOffice data={Data} />
    </>
  );
};

export default Main;
