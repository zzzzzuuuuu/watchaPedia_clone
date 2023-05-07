import { useState } from "react";
import Modal from "../components/Modal";

const Main = () => {
  const [isButton, setIsButton] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setIsButton(true);
        }}
      >
        로그인
      </button>
      {isButton ? <Modal /> : null}
    </>
  );
};

export default Main;
