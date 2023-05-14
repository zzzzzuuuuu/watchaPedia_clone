import Movies from "../components/Movies";
import {DATA} from "../assets/Data";

const Main = () => {
  return (
    <>
      <Movies data={DATA} />
    </>
  );
};

export default Main;
