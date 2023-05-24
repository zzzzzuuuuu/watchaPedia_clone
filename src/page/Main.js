import Movies from "../components/Movies";
// import {DATA} from "../assets/Data";
import axios from "axios";
import {useState, useEffect} from "react";

const Main = () => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.REACT_APP_API_KEY
      }
    };


    axios.get('https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1', options)
      .then(response => {
        // console.log(response);
        setData(response.data.results);
      })
      .catch(err => console.error(err));}
  ,[]);

  return (
    <>
      <Movies data={data} />
    </>
  );
};

export default Main;
